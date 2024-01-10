/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 22:42:15
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-25 11:47:07
 * @FilePath: /small-days/src/commom/storage.ts
 * @Description:
 */
import {MMKV} from 'react-native-mmkv';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';
import {configurePersistable} from 'mobx-persist-store';

const storage = new MMKV();

// add this line inside your App.tsx
if (__DEV__) {
  initializeMMKVFlipper({default: storage});
}

configurePersistable({
  storage: {
    setItem: (key: string, data: any) => storage.set(key, data),
    getItem: (key: string) => storage.getString(key) || null,
    removeItem: (key: string) => storage.delete(key),
  },
  // expireIn: 1000 * 3600 * 24 * 10, // 10天到期，默认无限期
  // removeOnExpiration: true, // 到期后删除
  stringify: true,
});

class Storage {
  getString(key: string): string | undefined {
    return storage.getString(key);
  }

  getBoolean(key: string): boolean | undefined {
    return storage.getBoolean(key);
  }

  getNumber(key: string): number | undefined {
    return storage.getNumber(key);
  }

  getObject<T = any>(key: string): T | undefined {
    const json = storage.getString(key);
    if (json) {
      return JSON.parse(json);
    }
  }

  set(key: string, val: string | number | boolean): void {
    storage.set(key, val);
  }

  setObject(key: string, val: any): void {
    storage.set(key, JSON.stringify(val));
  }

  remove(key: string): void {
    storage.delete(key);
  }
}

export default new Storage();
