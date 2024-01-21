/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 23:11:19
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-25 12:20:18
 * @FilePath: /small-days/src/stores/index.ts
 * @Description:
 */
import {configurePersistable, makePersistable} from 'mobx-persist-store';
import {makeAutoObservable} from 'mobx';
import {GlobalStore} from './global';
import Storage from '../commom/storage';
import {MMKV} from 'react-native-mmkv';
import {createContext} from 'react';
import React from 'react';

export const initStores = () => {
  const storage = new MMKV();
  configurePersistable({
    // storage: new Storage(storage) as any,
    storage: {
      setItem: (key: string, data: any) => storage.set(key, data),
      getItem: (key: string) => storage.getString(key) || null,
      removeItem: (key: string) => storage.delete(key),
      ...(new Storage(storage) as any),
    },
    expireIn: 1000 * 3600 * 24 * 10, // 10天到期，默认无限期
    removeOnExpiration: true, // 到期后删除
    stringify: true,
  });
};

// 定义一个初始化数据存储类
export class initStore {
  // 定义一个名为global的GlobalStore成员变量
  global: GlobalStore;
  constructor() {
    // 使用mobx的makeAutoObservable来使类可观察，以便跟踪状态变化
    makeAutoObservable(this);
    // 调用initStores函数，这个函数可能是用来初始化其他数据存储的
    initStores();
    // 创建一个新的GlobalStore实例并分配给global成员变量
    this.global = new GlobalStore();
  }
}

// 创建一个全局的initStore实例，用于整个应用程序中的状态管理
export const rootStore = new initStore();

// 创建一个React Context，用于在组件树中共享全局数据存储
export const StoreContext = createContext<{
  global: GlobalStore;
}>(rootStore);

// 自定义React Hook，用于在组件中访问共享的数据存储
export function useStore() {
  return React.useContext(StoreContext);
}
