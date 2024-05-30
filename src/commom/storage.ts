/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 22:42:15
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-25 11:47:07
 * @FilePath: /small-days/src/commom/this.storage.ts
 * @Description:
 */
import {configurePersistable} from 'mobx-persist-store';
import {MMKV} from 'react-native-mmkv';
import {initializeMMKVFlipper} from 'react-native-mmkv-flipper-plugin';

const storage = new MMKV();

export const initStores = () => {
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

export async function setStorage(key: string, value: any) {
  try {
    storage.set(key, JSON.stringify(value, null, ''));
  } catch (e: any) {
    // errorLog(`存储失败${key}`, e?.message);
  }
}

export async function getStorage(key: string) {
  try {
    const result = storage.getString(key);
    if (result) {
      return JSON.parse(result);
    }
  } catch {}
  return null;
}

export async function getMultiStorage(keys: string[]) {
  if (keys.length === 0) {
    return [];
  }
  // const result = await storage.multiGet(keys);
  const result = storage.getAllKeys();

  return result.map(_ => {
    try {
      if (_[1]) {
        return JSON.parse(_[1]);
      }
      return null;
    } catch {
      return null;
    }
  });
}

export async function removeStorage(key: string) {
  return storage.delete(key);
}

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
