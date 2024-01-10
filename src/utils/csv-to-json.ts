/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-23 22:51:19
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-23 23:14:26
 * @FilePath: /small-days/src/utils/csv-to-json.ts
 * @Description:
 */
import axios from 'axios';
import XLSX from 'xlsx';
export const csvToJson = async () => {
  return await axios({
    method: 'get',
    url: 'http://archive.ics.uci.edu/ml/machine-learning-databases/wine-quality/winequality-red.csv',
    responseType: 'arraybuffer',
  }).then(res => {
    var arraybuffer = res.data;
    var sheet = tranfer2Sheet(arraybuffer, 0);
    var result = sheet2Array(sheet, {name: 'A', age: 'B', gender: 'C'}, 2);
    console.log('get Array from Excel,array = ', result);
  });
};

function tranfer2Sheet(arraybuffer, sheetNumber) {
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for (var i = 0; i != data.length; ++i) {
    arr[i] = String.fromCharCode(data[i]);
  }
  var bstr = arr.join('');
  var workbook = XLSX.read(bstr, {type: 'binary'});
  var sheetName = workbook.SheetNames[sheetNumber];
  var sheet = workbook.Sheets[sheetName];
  return sheet;
}

//第一个参数是sheet，由上个方法得到。
//第二个参数是转换标准，指定转换成对象的key与excel的列的对应关系，例如standard = { name:"A",age:"B" } 也就是 A列转为name，B列转为age，得到对象。
//第三个参数为开始的行号，用于避开标题。
function sheet2Array(sheet, standard, startRow) {
  var rowNum = 1;
  var resultList = [];
  var total = sheet['!ref'];
  var startEnd = total.split(':');
  var start = startEnd[0].replace(/[^0-9]/gi, '');
  var end = startEnd[1].replace(/[^0-9]/gi, '');
  for (var rowNum = start; rowNum <= end; rowNum++) {
    if (rowNum >= startRow) {
      var rowObj = {};
      Object.keys(standard).forEach(key => {
        let column = standard[key];
        let value = sheet[column + '' + rowNum];
        //去掉单元格中的空格和回车
        rowObj[key] = (value && value.w ? value.w : '')
          .replace(/\ +/g, '')
          .replace(/[\r\n]/g, '');
      });
      resultList.push(rowObj);
    }
  }
  return resultList;
}
