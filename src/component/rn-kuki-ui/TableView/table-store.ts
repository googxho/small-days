/*
 * @Author: linyan
 * @Date: 2023-06-07 16:06:23
 * @LastEditors: linyan
 * @LastEditTime: 2024-01-03 16:42:00
 * @Description: table的数据管理
 */
import {makeAutoObservable} from 'mobx';
class TableStore<T> {
  unitTotal: T | null = null; // 单位合集
  isKg: boolean = false; // 是否展示公斤
  constructor() {
    makeAutoObservable(this);
  }

  // 保存单位合集
  setUnitTotal(data: T) {
    this.unitTotal = data;
  }

  setIskg(flag: boolean) {
    this.isKg = flag;
  }
}

export default TableStore;
