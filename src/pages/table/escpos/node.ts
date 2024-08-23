import iconv from 'iconv-lite';
// const ipp = require('ipp');
// const printer = ipp.Printer('http://localhost:631/printers/YOUR_PRINTER');

import {
  ESCPOS,
  CommandPrint,
  CommandLineSpacing,
  CommandCharacter,
  CommandMechanismControl,
  CommandBitImage,
  CommandPrintPosition,
  Command2DCode,
} from './escpos';
const init = [0x1b, 0x40];
const fontSize = CommandCharacter.selectCharacterSize(6, 6);
const text1 = iconv.encode('Hello\n world\n 你好\n 世界\n', 'GBK');

const center = CommandPrintPosition.selectJustification(
  ESCPOS.JUSTIFICATION_CENTER,
);
// const d2n = Command2DCode.QRSetSizeOfModule(16);
// const d2 = Command2DCode.QRStoreDataInSymbolStorageArea(['1234567890']);
const feed3 = CommandPrint.printAndFeedNLines(3);
const cut = CommandMechanismControl.selectCutModeAndCutPaperFeed(
  ESCPOS.CUT_PARTIAL_FEED,
  1,
);

const data = ESCPOS.toBuffer([
  ...init,
  ...fontSize,
  ...center,
  ...text1,
  ...feed3,
  ...cut,
]);

export default function printNode() {
  console.log('🚀 ~ data:', data);
  return data;
}

// printer.execute(
//   'Print-Job',
//   {
//     'operation-attributes-tag': {
//       'requesting-user-name': 'nap',
//       'job-name': 'testing',
//     },
//     'job-attributes-tag': {},
//     data,
//   },
//   function (err, res) {
//     console.log(err);
//     console.log(res);
//   },
// );
