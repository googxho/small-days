/**
 * Copyright 2022 Colin Leung
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * ESC/POS
 * EPSON took the initiative by introducing ESC/POS, a proprietary POS printer command system, which includes patented or patent pending commands and enables versatile POS system construction with high scalability. Compatible with all types of EPSON POS printers and displays, this proprietary control system also offers the flexibility to easily make future upgrades. Its popularity is worldwide.
 * ESC/POS is designed to reduce the processing load on the host computer in POS environments. It comprises a set of highly functional and efficient commands that enables the full realization of the potential of printers.
 *
 * EPSON is a registered trademark of Seiko Epson Corporation.
 *
 * All other trademarks are the property of their respective owners and used for identification purpose only.
 */

/**
 * ASCII Control Characters
 * https://en.wikipedia.org/wiki/ASCII
 */
import {Buffer} from 'buffer';
export class ASCII {
  static NUL = 0x00; //	Null
  static SOH = 0x01; //	Start of Heading
  static STX = 0x02; //	Start of Text
  static ETX = 0x03; //	End of Text
  static EOT = 0x04; //	End of Transmission
  static ENQ = 0x05; //	Enquiry
  static ACK = 0x06; //	Acknowledgement
  static BEL = 0x07; //	Bell
  static BS = 0x08; //	Backspace
  static HT = 0x09; //	Horizontal Tab
  static LF = 0x0a; //	Line Feed
  static VT = 0x0b; //	Vertical Tab
  static FF = 0x0c; //	Form Feed
  static CR = 0x0d; //	Carriage Return
  static SO = 0x0e; //	Shift Out
  static SI = 0x0f; //	Shift In
  static DLE = 0x10; //	Data Link Escape
  static DC1 = 0x11; //	Device Control 1 (often XON)
  static DC2 = 0x12; //	Device Control 2
  static DC3 = 0x13; //	Device Control 3 (often XOFF)
  static DC4 = 0x14; //	Device Control 4
  static NAK = 0x15; //	Negative Acknowledgement
  static SYN = 0x16; //	Synchronous Idle
  static ETB = 0x17; //	End of Transmission Block
  static CAN = 0x18; //	Cancel
  static EM = 0x19; //	End of Medium
  static SS = 0x1a; //	Substitute
  static ESC = 0x1b; //	Escape
  static FS = 0x1c; //	File Separator
  static GS = 0x1d; //	Group Separator
  static RS = 0x1e; //	Record Separator
  static US = 0x1f; //	Unit Separator
  static DEL = 0x7f; //	Delete
  static SP = 0x20; //  Space
}

export class Utils {
  static checkIsNumber(n) {
    if (isNaN(n)) {
      throw new Error('Not a number');
    }
  }
  static checkRange(n) {
    this.checkIsNumber(n);
    if (n < 0 || n > 256) {
      throw new Error('Out of Range [0-255]');
    }
  }

  static checkRangeFrom(n, min, max) {
    this.checkIsNumber(n);
    if (n < min || n > max) {
      throw new Error('Out of Range [0-255]');
    }
  }

  static checkBoolean(n) {
    this.checkEnumerate(n, [0, 1]);
  }

  static checkEnumerate(n, enums = []) {
    if (!enums.includes(n)) {
      throw new Error('n must be: ' + enums.join(', '));
    }
  }

  static byteLengthPLPH(n) {
    return [n % 256, Math.floor(n / 256)];
  }

  static toBuffer(ary) {
    return Buffer.from(
      new Uint8Array(
        ary.map(it => (typeof it === 'string' ? it.charCodeAt(0) : it)),
      ),
    );
  }
}

//TODO: Strict Commands have validation of input arguments
export class StrictCommandPrint {
  static printAndFeedNLines(n) {
    Utils.checkRange(n);
    return CommandPrint.printAndFeedNLines(n);
  }

  static printAndReverseFeedNLines(n) {
    Utils.checkRange(n);
    return CommandPrint.printAndReverseFeedNLines(n);
  }
}

/**
 * The command classes follow grouping by function from EPSON Tech reference
 * https://reference.epson-biz.com/modules/ref_escpos/index.php?content_id=72
 */
export class CommandPrint {
  static printAndLineFeed = () => [ASCII.LF];
  static printDataInPageMode = () => [ASCII.ESC, ASCII.FF];
  static PrintAndFeedPaper = () => [ASCII.ESC, 'J'];
  static PrintAndReverseFeed = () => [ASCII.ESC, 'K'];
  static printAndFeedNLines = n => [ASCII.ESC, 'd', n];
  static printAndReverseFeedNLines = n => [ASCII.ESC, 'e', n];
}

export class CommandLineSpacing {
  static setDefaultLineSpacing = () => [ASCII.ESC, 2];
  static setLineSpacing = (n = null) =>
    n === null ? this.setDefaultLineSpacing() : [ASCII.ESC, 3, n];
}

export class CommandCharacter {
  static cancelPrintDataInPageMode = () => [ASCII.CAN];
  static setRightSideCharacterSpacing = (n = 0) => [ASCII.ESC, ASCII.SP, n];
  static selectPrintMode = (
    bFont = 0,
    bBold = 0,
    bDoubleHeight = 0,
    bDoubleWidth = 0,
    bUnderline = 0,
  ) => [
    ASCII.ESC,
    '!',
    bFont |
      (bBold << 3) |
      (bDoubleHeight << 4) |
      (bDoubleWidth << 5) |
      (bUnderline << 7),
  ];
  static underlineMode = (n = 0) => [ASCII.ESC, '-', n];
  static emphasizedMode = (n = 0) => [ASCII.ESC, 'E', n];
  static doubleStrikeMode = (n = 0) => [ASCII.ESC, 'G', n];
  static selectFont = (n = 0) => [ASCII.ESC, 'M', n];

  //https://reference.epson-biz.com/modules/ref_charcode_en/index.php?content_id=118
  static selectInternationalCharacterSet = (n = 0) => [ASCII.ESC, 'R', n];
  static selectCharacterCodeTable = (n = 0) => [ASCII.ESC, 't', n];

  static clockwise90RotationMode = (n = 0) => [ASCII.ESC, 'V', n];
  static selectPrintColor = (n = 0) => [ASCII.ESC, 'r', n];
  static upsideDownPrintMode = (n = 0) => [ASCII.ESC, '{', n];
  // 选择字符大小
  static selectCharacterSize = (height = 0, width = 0) => [
    ASCII.GS,
    '!',
    height | (width << 4),
  ];
  static reversePrintMode = (n = 0) => [ASCII.GS, 'B', n];
  static smoothingMode = (n = 0) => [ASCII.GS, 'b', n];
  static selectCharacterEffectCharacterColor = (m = 49) => [
    ASCII.GS,
    '(',
    'N',
    2,
    0,
    48,
    m,
  ];
  static selectCharacterEffectBackgroundColor = (m = 48) => [
    ASCII.GS,
    '(',
    'N',
    2,
    0,
    49,
    m,
  ];
  static selectCharacterEffectShadingMode = (m = 0, a = 48) => [
    ASCII.GS,
    '(',
    'N',
    3,
    0,
    50,
    m,
    a,
  ];
  static selectCancelUserDefinedCharacterSet = (n = 0) => [ASCII.ESC, '%', n];

  static defineUserDefinedCharacters(n = 0) {
    throw new Error('TODO');
    return [ASCII.ESC, '&', n];
  }
  static cancelUserDefinedCharacters = (n = 32) => [ASCII.ESC, '?', n];
  static selectCodeConversionMethodCharacterEncodeSystem = (m = 1) => [
    ASCII.FS,
    '(',
    'C',
    2,
    0,
    48,
    m,
  ];
  static selectCodeConversionMethodFontPriority = (m = 0, a = 0) => [
    ASCII.FS,
    '(',
    'C',
    3,
    0,
    60,
    m,
    a,
  ];
}

export class CommandPrintingPaper {
  static selectLabelAndBlackMarkControlPaperLayoutSetting = (
    sm,
    sa,
    sb,
    sc,
    sd,
    se,
    sf,
  ) => {
    const data = [
      sm,
      ...sa.split(''),
      ';',
      ...sb.split(''),
      ';',
      ...sc.split(''),
      ';',
      ...sd.split(''),
      ';',
      ...se.split(''),
      ';',
      ...sf.split(''),
      ';',
    ];
    return [
      ASCII.FS,
      '(',
      'L',
      ...Utils.byteLengthPLPH(data.length + 1),
      33,
      ...data,
    ];
  };

  static selectLabelAndBlackMarkControlPaperLayoutInformation = (
    n,
    sm,
    sa,
    sb,
    sc,
    sd,
    se,
    sf,
  ) => [
    ASCII.FS,
    '(',
    'L',
    2,
    0,
    34,
    n,
    55,
    75, //header
    ...n.toString().split(''),
    ASCII.US, //InfoType
    sm,
    ...sa.split(''),
    ASCII.US,
    ...sb.split(''),
    ASCII.US,
    ...sc.split(''),
    ASCII.US,
    ...sd.split(''),
    ASCII.US,
    ...se.split(''),
    ASCII.US,
    ...sf.split(''),
    ASCII.NUL,
  ];

  static selectLabelAndBlackMarkControlTransmitPositionInformation = (
    bLabelPeelingPosition = 0,
    bCuttingPosition = 0,
    bPrintingPosition = 0,
    bPossibleFeedPaperToPrintStartingPositionOnCurrentLabel = 0,
    bPossibleFeedPaperToPrintStartingPositionOnNextLabel = 0,
  ) => [
    ASCII.FS,
    '(',
    'L',
    2,
    0,
    48,
    48,
    55,
    56,
    bLabelPeelingPosition |
      (bCuttingPosition << 1) |
      (bPrintingPosition << 2) |
      (1 << 6),
    bPossibleFeedPaperToPrintStartingPositionOnCurrentLabel |
      (bPossibleFeedPaperToPrintStartingPositionOnNextLabel << 1) |
      (1 << 6),
    ASCII.NUL,
  ];
  static selectLabelAndBlackMarkControlFeedPaperToLabelPeelingPosition = (
    m = 48,
  ) => [ASCII.FS, '(', 'L', 2, 0, 65, m];
  static selectLabelAndBlackMarkControlFeedPaperToCuttingPosition = (
    m = 48,
  ) => [ASCII.FS, '(', 'L', 2, 0, 66, m];
  static selectLabelAndBlackMarkControlFeedPaperToPrintStartingPosition = (
    m = 48,
  ) => [ASCII.FS, '(', 'L', 2, 0, 67, m];
  static selectLabelAndBlackMarkControlPaperLayoutErrorSpecialMarginSetting = (
    sn = 0,
  ) => {
    const data = [...sn.split('')];
    return [
      ASCII.FS,
      '(',
      'L',
      ...Utils.byteLengthPLPH(data.length + 1),
      67,
      ...data,
    ];
  };
}

export class CommandPrintPosition {
  static horizontalTab = () => [ASCII.HT];
  static setAbsolutePrintPosition = n => [
    ASCII.ESC,
    '$',
    ...Utils.byteLengthPLPH(n),
  ];
  static setHorizontalTabPositions = (ns = []) => [
    ASCII.ESC,
    'D',
    ...ns,
    ASCII.NUL,
  ];
  static selectPrintDirectionInPageMode = (n = 0) => [ASCII.ESC, 'T', n];
  static setPrintAreaInPageMode = (
    originX = 0,
    originY = 0,
    width = 128,
    height = 128,
  ) => [
    ASCII.ESC,
    'W',
    ...Utils.byteLengthPLPH(originX),
    ...Utils.byteLengthPLPH(originY),
    ...Utils.byteLengthPLPH(width),
    ...Utils.byteLengthPLPH(height),
  ];
  static setRelativePrintPosition = n => [
    ASCII.ESC,
    '\\',
    Utils.byteLengthPLPH(n),
  ];
  static selectJustification = (n = 0) => [ASCII.ESC, 'a', n];
  static setAbsoluteVerticalPrintPositionInPageMode = n => [
    ASCII.GS,
    '$',
    Utils.byteLengthPLPH(n),
  ];
  static setLeftMargin = n => [ASCII.GS, 'L', Utils.byteLengthPLPH(n)];
  static setPrintPositionToBeginningOfPrintLine = n => [ASCII.GS, 'T', n];
  static setPrintAreaWidth = n => [ASCII.GS, 'W', Utils.byteLengthPLPH(n)];
  static setRelativeVerticalPrintPositionInPageMode = n => [
    ASCII.GS,
    '\\',
    Utils.byteLengthPLPH(n),
  ];
}

export class CommandPaperSensor {
  static selectPaperSensorToOutputPaperEndSignals = (
    bRollPaperNearEndSensorEnabled = 0,
    bRollPaperEndSensorEnabled = 0,
  ) => [
    ASCII.ESC,
    'c',
    '3',
    bRollPaperNearEndSensorEnabled | (bRollPaperEndSensorEnabled < 2),
  ];
  static selectPaperSensorToStopPrinting = (
    bRollPaperNearEndSensorEnabled = 0,
    bRollPaperEndSensorEnabled = 0,
  ) => [
    ASCII.ESC,
    'c',
    '4',
    bRollPaperNearEndSensorEnabled | (bRollPaperEndSensorEnabled < 2),
  ];
}

export class CommandMechanismControl {
  static returnHome = () => [ASCII.ESC, '<'];
  static unidirectionalPrintMode = (n = 0) => [ASCII.ESC, 'U', n];
  static partialCutOnePointLeftUncut = () => [ASCII.ESC, 'i'];
  static partialCutThreePointLeftUncut = () => [ASCII.ESC, 'm'];
  static selectCutModeAndCutPaper = (m = 0) => [ASCII.GS, 'V', m];
  static selectCutModeAndCutPaperFeed = (m = 65, n = 1) => [
    ASCII.GS,
    'V',
    m,
    n,
  ];
  static selectCutModeAndCutPaperSetPosition = (m = 97, n = 1) => [
    ASCII.GS,
    'V',
    m,
    n,
  ];
  static selectCutModeAndCutPaperFeedStartPosition = (m = 103, n = 1) => [
    ASCII.GS,
    'V',
    m,
    n,
  ];
}

export class CommandBitImage {
  static selectBitImageMode = (m, data) => [
    ASCII.ESC,
    '*',
    Utils.byteLengthPLPH(data.length),
    ...data,
  ];
  static setReferenceDotDensityForGraphics = (x, y) => [
    ASCII.GS,
    '(',
    'L',
    4,
    0,
    48,
    49,
    x,
    y,
  ];
  static printGraphicsDataInPrintBuffer = () => [
    ASCII.GS,
    '(',
    'L',
    2,
    0,
    48,
    50,
  ];
  static storeGraphicsDataInPrintBufferRasterFormat = (
    data,
    width,
    height,
    a = 48,
    bx = 1,
    by = 1,
    c = 49,
  ) => [
    ASCII.GS,
    '(',
    'L',
    ...Utils.byteLengthPLPH(data.length + 10),
    48,
    112,
    a,
    bx,
    by,
    c,
    ...Utils.byteLengthPLPH(width),
    ...Utils.byteLengthPLPH(height),
    ...data,
  ];
  static storeGraphicsDataInPrintBufferColumnFormat = (
    data,
    width,
    height,
    bx = 1,
    by = 1,
    c = 49,
  ) => [
    ASCII.GS,
    '(',
    'L',
    ...Utils.byteLengthPLPH(data.length + 10),
    48,
    113,
    48,
    bx,
    by,
    c,
    ...Utils.byteLengthPLPH(width),
    ...Utils.byteLengthPLPH(height),
    ...data,
  ];

  static NVGraphicsTransmitMemoryCapacity = () => [
    ASCII.GS,
    '(',
    'L',
    2,
    0,
    48,
    48,
  ];
  static NVGraphicsTransmitRemainingCapacity = () => [
    ASCII.GS,
    '(',
    'L',
    2,
    0,
    48,
    51,
  ];
  static NVGraphicsTransmitDefinedKeyCodeList = () => [
    ASCII.GS,
    '(',
    'L',
    4,
    0,
    48,
    64,
    75,
    67,
  ];
  static NVGraphicsDeleteAll = () => [
    ASCII.GS,
    '(',
    'L',
    5,
    0,
    48,
    65,
    'C',
    'L',
    'R',
  ];
  static NVGraphicsDeleteSpecified = (kc1, kc2) => [
    ASCII.GS,
    '(',
    'L',
    4,
    0,
    48,
    66,
    kc1,
    kc2,
  ];
  static NVGraphicsDataRasterFormat = (
    data,
    width,
    heigth,
    kc1,
    kc2,
    a = 48,
    b = 1,
    c = 49,
  ) =>
    //TODO, data format is not implemented
    [
      ASCII.GS,
      '(',
      'L',
      ...Utils.byteLengthPLPH(data.length + 10),
      48,
      67,
      a,
      kc1,
      kc2,
      b,
      ...Utils.byteLengthPLPH(width),
      ...Utils.byteLengthPLPH(height),
      ...data,
    ];
  static NVGraphicsDataColumnFormat = (
    data,
    width,
    heigth,
    kc1,
    kc2,
    b = 1,
    c = 49,
  ) =>
    //TODO, data format is not implemented
    [
      ASCII.GS,
      '(',
      'L',
      ...Utils.byteLengthPLPH(data.length + 10),
      48,
      68,
      48,
      kc1,
      kc2,
      b,
      ...Utils.byteLengthPLPH(width),
      ...Utils.byteLengthPLPH(height),
      ...data,
    ];
  static NVGraphicsDataPrintSpecified = (kc1, kc2, x, y) => [
    ASCII.GS,
    '(',
    'L',
    6,
    0,
    48,
    69,
    kc1,
    kc2,
    x,
    y,
  ];
  static NVGraphicsDataBMP = (bmp = [], kc1, kc2, b = 48) => [
    ASCII.GS,
    'D',
    48,
    67,
    48,
    kc1,
    kc2,
    b,
    49,
    ...bmp,
  ];

  static DownloadGraphicsTransmitRemainingCapacity = () => [
    ASCII.GS,
    '(',
    'L',
    2,
    0,
    48,
    52,
  ];
  static DownloadGraphicsTransmitDefinedKeyCodeList = () => [
    ASCII.GS,
    '(',
    'L',
    4,
    0,
    48,
    80,
    75,
    67,
  ];
  static DownloadGraphicsDeleteAll = () => [
    ASCII.GS,
    '(',
    'L',
    5,
    0,
    48,
    81,
    'C',
    'L',
    'R',
  ];
  static DownloadGraphicsDeleteSpecified = (kc1, kc2) => [
    ASCII.GS,
    '(',
    'L',
    4,
    0,
    48,
    82,
    kc1,
    kc2,
  ];
  static DownloadGraphicsDataRasterFormat = (
    data,
    width,
    heigth,
    kc1,
    kc2,
    a = 48,
    b = 1,
    c = 49,
  ) =>
    //TODO, data format is not implemented
    [
      ASCII.GS,
      '(',
      'L',
      ...Utils.byteLengthPLPH(data.length + 10),
      48,
      83,
      a,
      kc1,
      kc2,
      b,
      ...Utils.byteLengthPLPH(width),
      ...Utils.byteLengthPLPH(height),
      ...data,
    ];
  static DownloadGraphicsDataColumnFormat = (
    data,
    width,
    heigth,
    kc1,
    kc2,
    b = 1,
    c = 49,
  ) =>
    //TODO, data format is not implemented
    [
      ASCII.GS,
      '(',
      'L',
      ...Utils.byteLengthPLPH(data.length + 10),
      48,
      84,
      48,
      kc1,
      kc2,
      b,
      ...Utils.byteLengthPLPH(width),
      ...Utils.byteLengthPLPH(height),
      ...data,
    ];
  static DownloadGraphicsDataPrintSpecified = (kc1, kc2, x, y) => [
    ASCII.GS,
    '(',
    'L',
    6,
    0,
    48,
    85,
    kc1,
    kc2,
    x,
    y,
  ];
  static DownloadGraphicsDataBMP = (bmp = [], kc1, kc2, b = 48) => [
    ASCII.GS,
    'D',
    48,
    83,
    48,
    kc1,
    kc2,
    b,
    49,
    ...bmp,
  ];
}

export class CommandPanelButton {
  static enablePanelButtons = (n = 0) => [ASCII.ESC, 'c', '5', n];
}

export class CommandStatus {
  static transmitRealTimeStatus = (n, a) => [ASCII.DLE, ASCII.EOT, n, a];
  static enableAutomaticStatusBackForOptionalFunctions = (m = 51, n = 0) => [
    ASCII.FS,
    '(',
    'e',
    '2',
    '0',
    m,
    n,
  ];
  static enableAutomaticStatusBack = (
    bDrawerKickoutConnectorStatus,
    bOnOfflineStatus,
    bErrorStatus,
    bRollpaperSensorStatus,
    bPanelSwitchStatus,
  ) => [
    ASCII.GS,
    'a',
    bDrawerKickoutConnectorStatus |
      (bOnOfflineStatus << 1) |
      (bErrorStatus << 2) |
      (bRollpaperSensorStatus << 3) |
      (bPanelSwitchStatus << 6),
  ];
  static enableAutomaticStatusBacForInk = (n = 0) => [ASCII.GS, 'j', n];
  static transmitStatus = n => [ASCII.GS, 'r', n];
}

export class CommandBarcode {
  static selectPrintPositionOfHRICharacters = (n = 0) => [ASCII.GS, 'H', n];
  static selectFontForHRICharacters = n => [ASCII.GS, 'f', n];
  static setBarcodeHeight = n => [ASCII.GS, 'h', n];
  static printBarcode = (m, d = []) => [ASCII.GS, 'k', m, ...d, ASCII.NUL];
  static setBarcodeWidth = n => [ASCII.GS, 'w', n];
}

export class Command2DCode {
  static QRSelectModel = (n1 = 50) => [ASCII.GS, '(', 'k', 4, 0, 49, 65, n1, 0];
  static QRSetSizeOfModule = n => [ASCII.GS, '(', 'k', 3, 0, 49, 67, n];
  static QRSelectErrorCorrectionLevel = (n = 48) => [
    ASCII.GS,
    '(',
    'k',
    3,
    0,
    49,
    69,
    n,
  ];
  static QRStoreDataInSymbolStorageArea = (data = []) => [
    ASCII.GS,
    '(',
    'k',
    ...Utils.byteLengthPLPH(data.length + 4),
    49,
    80,
    48,
    ...data,
  ];
  static QRPrintSymbolDatInSymbolStorageArea = () => [
    ASCII.GS,
    '(',
    'k',
    3,
    0,
    49,
    81,
    48,
  ];
  static transmitSizeInformationOfSymbolDataInSymbolStorageArea = () => [
    ASCII.GS,
    '(',
    'k',
    3,
    0,
    49,
    82,
    48,
  ];

  //TODO: PDF417, MaxiCode, GS1 DataBar, Composite Symbology, Aztec Code, Data Matrix
}

export class CommandMacro {
  static start = () => [ASCII.GS, ':'];

  static execute = (r, t, m) => [ASCII.GS, '^', r, t, m];
}

export class CommandKanji {
  static selectPrintMode = (n = 0) => [ASCII.FS, '!', n];
  static selectKanjiCharacterMode = () => [ASCII.FS, '&'];
  static enableUnderlineMode = (n = 0) => [ASCII.FS, '-', n];
  static cancelKanjiCharacterMode = () => [ASCII.FS, '.'];
  static defineUserDefinedKanjiCharacters = (c1, c2, data = []) => [
    ASCII.FS,
    '2',
    c1,
    c2,
    ...data,
  ];
  static cancelUserDefinedKanjiCharacters = (c1, c2) => [ASCII.FS, '?', c1, c2];
  static selectKanjiCharacterCodeSystem = (n = 0) => [ASCII.FS, 'C', n];
  static setKanjiCharacterSpacing = (n1, n2) => [ASCII.FS, 'S', n1, n2];
  static enableQuadrupleSizeMode = (n = 0) => [ASCII.FS, 'W', n];
  static selectFont = m => [ASCII.FS, '(', 'A', 2, 0, m];
}

export class CommandMiscellaneous {
  static sendRealTimeRequest = n => [ASCII.DLE, ASCII.ENQ, n];
  static generatePulseInRealTime = (m, t) => [ASCII.DLE, ASCII.DC4, 1, m, t];
  static executePowerOffSequence = () => [ASCII.DLE, ASCII.DC4, 2, 1, 8];
  static soundBuzzerInRealTime = (a, n, r, t1, t2) => [
    ASCII.DLE,
    ASCII.DC4,
    3,
    a,
    n,
    r,
    t1,
    t2,
  ];
  static transmitSpecifiedStatusInRealTime = m => [ASCII.DLE, ASCII.DC4, 7, m];
  static clearBuffers = () => [ASCII.DLE, ASCII.DC4, 8, 1, 3, 20, 1, 6, 2, 8];
  static specifyBatchPrint = (m = 0, n = 0) => [
    ASCII.ESC,
    '(',
    'Y',
    2,
    0,
    m,
    n,
  ];
  static selectPeripheralDevice = n => [ASCII.ESC, '=', n];
  static initializePrinter = () => [ASCII.ESC, '@'];
  static selectPageMode = () => [ASCII.ESC, 'L'];
  static selectStandardMode = () => [ASCII.ESC, 'S'];
  static generatePulse = (m, t1, t2) => [ASCII.ESC, 'p', m, t1, t2];
  static executeTestPrint = (n, m) => [ASCII.GS, '(', 'A', 2, 0, n, m];
  static enableRealTimeCommand = (b, a) => [
    ASCII.GS,
    '(',
    'D',
    ...Utils.byteLengthPLPH(a.length + 1),
    20,
    ...a,
  ];
  static transmitPrinterID = n => [ASCII.GS, 'I', n];
  static setHorizontalVerticaMotionUnits = (x, y) => [ASCII.GS, 'P', x, y];
  static initializeMaintenanceCounter = nL => [ASCII.GS, 'g', '0', 0, nL, 0];
  static transmitMaintenanceCounter = nL => [ASCII.GS, 'g', '2', 0, nL, 0];
  static setOnlineRecoveryWaitTime = (t1, t2) => [ASCII.GS, 'z', '0', t1, t2];

  static requestTransmissionProcessIdResponse = (d1, d2, d3, d4) => [
    ASCII.GS,
    '(',
    'H',
    6,
    0,
    48,
    48,
    d1,
    d2,
    d3,
    d4,
  ];
  static requestTransmissionOfflineResponse = (d = 0) => [
    ASCII.GS,
    '(',
    'H',
    3,
    0,
    49,
    48,
    d,
  ];

  static selectPrintControlMode = m => [ASCII.GS, '(', 'K', 2, 0, 48, m];
  static selectPrintDensity = m => [ASCII.GS, '(', 'K', 2, 0, 49, m];
  static selectPrintSpeed = m => [ASCII.GS, '(', 'K', 2, 0, 50, m];
  static selectNumberOfPartsForThermalHeadEnergizing = m => [
    ASCII.GS,
    '(',
    'K',
    2,
    0,
    97,
    m,
  ];

  static beep = (n, c, t) => [ASCII.ESC, '(', 'A', 4, 0, 48, n, c, t];
  static modelSpecificBuzzerControl = () => [ASCII.ESC, '(', 'A', 1, 0, 97];
  static modelSpecificBuzzerControl2 = () => [ASCII.ESC, '(', 'A', 1, 0, 98];
  static modelSpecificBuzzerControl3 = () => [ASCII.ESC, '(', 'A', 1, 0, 99];

  static drawGraphicsLine = (x1, y1, x2, y2, c, m1, m2) => [
    ASCII.GS,
    '(',
    'Q',
    12,
    0,
    48,
    ...Utils.byteLengthPLPH(x1),
    ...Utils.byteLengthPLPH(y1),
    ...Utils.byteLengthPLPH(x2),
    ...Utils.byteLengthPLPH(y2),
    c,
    m1,
    m2,
  ];
  static drawGraphicsRectangle = (x1, y1, x2, y2, c, m1, m2, m3, m4) => [
    ASCII.GS,
    '(',
    'Q',
    14,
    0,
    49,
    ...Utils.byteLengthPLPH(x1),
    ...Utils.byteLengthPLPH(y1),
    ...Utils.byteLengthPLPH(x2),
    ...Utils.byteLengthPLPH(y2),
    c,
    m1,
    m2,
    m3,
    m4,
  ];

  static receiptCancelSetValueForTopOrBottomLogoPrinting = c => [
    ASCII.FS,
    '(',
    'E',
    6,
    0,
    60,
    2,
    c,
    67,
    76,
    82,
  ];
  static receiptTransmitSetValuesForTopOrBottomLogoPrinting = c => [
    ASCII.FS,
    '(',
    'E',
    3,
    0,
    61,
    2,
    c,
  ];
  static receiptSetTopLogoPrinting = (kc1, kc2, a, n) => [
    ASCII.FS,
    '(',
    'E',
    6,
    0,
    62,
    2,
    kc1,
    kc2,
    a,
    n,
  ];
  static receiptSetBottomLogoPrinting = (kc1, kc2, a) => [
    ASCII.FS,
    '(',
    'E',
    5,
    0,
    63,
    2,
    kc1,
    kc2,
    a,
  ];
  static receiptMakeExtendedSettingsForTopOrBottomLogoPrinting = (a = []) => [
    ASCII.FS,
    '(',
    'E',
    ...Utils.byteLengthPLPH(a.length + 2),
    64,
    2,
    ...a,
  ];
  static receiptEnableTopOrButtonLogoPrinting = (a, n) => [
    ASCII.FS,
    '(',
    'E',
    4,
    0,
    65,
    2,
    a,
    n,
  ];

  static setPrintableAreaInPageMode = (w, h, ox) => [
    ASCII.GS,
    '(',
    'P',
    8,
    0,
    48,
    ...Utils.byteLengthPLPH(w),
    ...Utils.byteLengthPLPH(h),
    ...Utils.byteLengthPLPH(ox),
    1,
  ];
}

/**
 * Use ESCPOS.toBuffer(commandArray) to convert command array into buffer for IPP print job
 */
export class ESCPOS {
  static UNDERLINE_MODE_OFF = 0;
  static UNDERLINE_MODE_1DOT = 1;
  static UNDERLINE_MODE_2DOTS = 2;

  static FONT_A = 0;
  static FONT_B = 1;
  static FONT_C = 2;
  static FONT_D = 3;
  static FONT_E = 4;
  static FONT_SP_A = 97;
  static FONT_SP_B = 98;

  static CLOCKWISE_90_ROTATE_MODE_OFF = 0;
  static CLOCKWISE_90_ROTATE_MODE_1DOT = 1;
  static CLOCKWISE_90_ROTATE_MODE_1_5DOT = 2;

  static PRINT_COLOR_BLACK = 0;
  static PRINT_COLOR_RED = 1;

  static CHARACTER_EFFECT_FN_CHARACTER_COLOR = 48;
  static CHARACTER_EFFECT_FN_BACKGROUND_COLOR = 49;
  static CHARACTER_EFFECT_FN_SHADING_MODE = 50;

  static CHARACTER_EFFECT_FN_CHARACTER_COLOR_NONE = 48;
  static CHARACTER_EFFECT_FN_CHARACTER_COLOR_1 = 49;
  static CHARACTER_EFFECT_FN_CHARACTER_COLOR_2 = 50;
  static CHARACTER_EFFECT_FN_CHARACTER_COLOR_3 = 51;

  static CHARACTER_EFFECT_FN_BACKGROUND_COLOR_NONE = 48;
  static CHARACTER_EFFECT_FN_BACKGROUND_COLOR_1 = 49;
  static CHARACTER_EFFECT_FN_BACKGROUND_COLOR_2 = 50;
  static CHARACTER_EFFECT_FN_BACKGROUND_COLOR_3 = 51;

  static CHARACTER_EFFECT_FN_SHADING_MODE_OFF = 0;
  static CHARACTER_EFFECT_FN_SHADING_MODE_ON = 1;
  static CHARACTER_EFFECT_FN_SHADING_COLOR_NONE = 48;
  static CHARACTER_EFFECT_FN_SHADING_COLOR_1 = 49;
  static CHARACTER_EFFECT_FN_SHADING_COLOR_2 = 50;
  static CHARACTER_EFFECT_FN_SHADING_COLOR_3 = 51;

  static CODE_CONVERSION_METHOD_ENCODE_SYSTEM_1 = 1;
  static CODE_CONVERSION_METHOD_ENCODE_SYSTEM_2 = 2;

  static CODE_CONVERSION_METHOD_FONT_PRIORITY_1 = 0;
  static CODE_CONVERSION_METHOD_FONT_PRIORITY_2 = 1;

  static CODE_CONVERSION_METHOD_FONT_ANK = 0;
  static CODE_CONVERSION_METHOD_FONT_JP = 11;
  static CODE_CONVERSION_METHOD_FONT_SC = 20;
  static CODE_CONVERSION_METHOD_FONT_TC = 30;
  static CODE_CONVERSION_METHOD_FONT_KR = 41;

  static PRINT_DIRECTION_IN_PAGE_MODE_LEFT_TO_RIGHT = 0;
  static PRINT_DIRECTION_IN_PAGE_MODE_BOTTOM_TO_TOP = 1;
  static PRINT_DIRECTION_IN_PAGE_MODE_RIGHT_TO_LEFT = 2;
  static PRINT_DIRECTION_IN_PAGE_MODE_TOP_TO_BOTTOM = 3;

  static JUSTIFICATION_LEFT = 0;
  static JUSTIFICATION_CENTER = 1;
  static JUSTIFICATION_RIGHT = 2;

  static CUT_FULL = 0;
  static CUT_PARTIAL = 1;
  static CUT_FULL_FEED = 65;
  static CUT_PARTIAL_FEED = 66;
  static CUT_FULL_SET = 97;
  static CUT_PARTIAL_SET = 98;
  static CUT_FULL_FEED_START_POSITION = 103;
  static CUT_PARTIAL_FEED_START_POSITION = 104;

  static toBuffer(cmdResult) {
    return Utils.toBuffer(cmdResult);
  }
}

// module.exports = {
//   ESCPOSCommand: ESCPOS,
//   CommandPrint,
//   CommandLineSpacing,
//   CommandCharacter,
//   CommandPrintingPaper,
//   CommandPrintPosition,
//   CommandPaperSensor,
//   CommandMechanismControl,
//   CommandBitImage,
//   CommandPanelButton,
//   CommandStatus,
//   CommandBarcode,
//   Command2DCode,
//   CommandMacro,
//   CommandKanji,
//   CommandMiscellaneous,
//   ASCII
// };
