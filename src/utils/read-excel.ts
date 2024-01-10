/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-23 23:24:31
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-24 23:57:54
 * @FilePath: /small-days/src/utils/read-excel.ts
 * @Description:
 */
import XLSX from 'xlsx';
import Base64 from './base64';

// 读取本地excel文件
function readWorkbookFromLocalFile(file, callback) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, {type: 'binary'});
    if (callback) {
      callback(workbook);
    }
  };
  reader.readAsBinaryString(file);
}

// 从网络上读取某个excel文件，url必须同域，否则报错
function readWorkbookFromRemoteFile(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function (e) {
    if (xhr.status == 200) {
      var data = new Uint8Array(xhr.response);
      var workbook = XLSX.read(data, {type: 'array'});
      if (callback) {
        callback(workbook);
      }
    }
  };
  xhr.send();
}

export const transformBase64 = data => {
  return (
    'data:image/png;base64,' +
    Base64.btoa(
      new Uint8Array(data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        '',
      ),
    )
  );
};

// 字符串转ArrayBuffer
export function string2ArrayBuffer(str) {
  // 首先将字符串转为16进制
  let val = '';
  for (let i = 0; i < str.length; i++) {
    if (val === '') {
      val = str.charCodeAt(i).toString(16);
    } else {
      val += ',' + str.charCodeAt(i).toString(16);
    }
  }
  // 将16进制转化为ArrayBuffer
  return new Uint8Array(
    val.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16);
    }),
  ).buffer;
}
// ArrayBuffer转字符串
export function arrayBuffer2String(buffer) {
  return String.fromCharCode.apply(null, new Uint8Array(buffer));
}
