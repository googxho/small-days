/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 22:42:15
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-25 11:47:07
 * @FilePath: /small-days/src/commom/this.storage.ts
 * @Description:
 */
import {MMKV} from 'react-native-mmkv';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';

class Storage {
  storage: any = null;
  constructor(mmkv: any) {
    this.storage = mmkv;
    // add this line inside your App.tsx
    if (__DEV__) {
      initializeMMKVFlipper({default: this.storage});
    }
  }
  getString(key: string): string | undefined {
    return this.storage.getString(key);
  }

  getBoolean(key: string): boolean | undefined {
    return this.storage.getBoolean(key);
  }

  getNumber(key: string): number | undefined {
    return this.storage.getNumber(key);
  }

  getObject<T = any>(key: string): T | undefined {
    const json = this.storage.getString(key);
    if (json) {
      return JSON.parse(json);
    }
  }

  set(key: string, val: string | number | boolean): void {
    this.storage.set(key, val);
  }

  setObject(key: string, val: any): void {
    this.storage.set(key, JSON.stringify(val));
  }

  remove(key: string): void {
    this.storage.delete(key);
  }
}

export default Storage;
