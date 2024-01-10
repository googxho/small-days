/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 23:11:19
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-25 12:20:18
 * @FilePath: /small-days/src/stores/index.ts
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
