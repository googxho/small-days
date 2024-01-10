import {TouchableOpacity, PermissionsAndroid} from 'react-native';
import RNFS from 'react-native-fs';
import XLSX from 'xlsx';
import DocumentPicker from 'react-native-document-picker';
import {Buffer} from 'buffer';

// 需要安装一下三个,Buffer和react-native无需安装
//  "xlsx": "^0.18.5"
//  "react-native-fs": "^2.20.0",
//  "react-native-document-picker": "^9.0.1",
// reactNative导入excel文件
// 导入设备代码
function importdevice() {
  console.log('导入设备');
  requestFileAccessPermission(async state => {
    if (state) {
      openDocumentPicker();
    } else {
      ToastAndroid.show('权限获取失败', 1500);
    }
  });
}

function parseDataArray(data) {
  // 第一行为表头，从第二行开始为数据行
  const header = ['name', 'gender', 'birthday', 'height', 'weight'];
  const dataArray = [];

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const rowData = {};

    // 将表头与数据行的每个数据项组装成键值对
    for (let j = 0; j < header.length; j++) {
      rowData[header[j]] = row[j];
    }
    dataArray.push(rowData);
  }
  return dataArray;
}

async function openDocumentPicker() {
  try {
    const result = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles], // 允许用户选择所有类型的文件
    });
    // 使用RNFS模块来读取文件内容
    const fileContents = await RNFS.readFile(result[0].uri, 'base64');

    const binaryData = Buffer.from(fileContents, 'base64');
    const workbook = XLSX.read(binaryData, {type: 'buffer'});
    const sheetNameList = workbook.SheetNames;
    const firstSheetName = sheetNameList[0];

    const worksheet = workbook.Sheets[firstSheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, {header: 1});
    const members = parseDataArray(data);
    console.log('members', members); // 这里就是excel文档数据,以数组格式展开
  } catch (error) {
    ToastAndroid.show('导入失败', 1500);
    if (DocumentPicker.isCancel(error)) {
      console.log('User cancelled the document picker.');
    } else {
      console.log('Error while picking the document:', error);
    }
  }
}

// 定义一个异步函数，用于请求文件访问权限
async function requestFileAccessPermission(callBack) {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'File Access Permission',
        message: 'This app needs access to your files.',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('File access permission granted.');
      callBack(true);
    } else {
      callBack(false);
      console.log('File access permission denied.');
    }
  } catch (error) {
    console.log('Error while requesting file access permission:', error);
  }
}

//   <TouchableOpacity
//   style={[styles.beginSession]}
//   onPress={importdevice}>
//   <Text style={styles.buttonTitle}>批量导入</Text>
// </TouchableOpacity>
