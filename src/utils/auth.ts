/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 23:05:28
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-22 23:09:51
 * @FilePath: /small-days/src/utils/auth.ts
 * @Description:
 */
import {IUserInfo} from '@types/userInfo';
import storage from 'src/commom/storage';

let token = '';
let userInfo: IUserInfo | null = null;

export const getToken = () => token;
export const getUserInfo = () => userInfo;

export const setToken = async (value: string) => {
  token = value;
};

export const setUserInfo = async (info: IUserInfo | null) => {
  userInfo = info;
  await storage.setObject('userInfo', info);
};

export const logout = async function () {
  setToken('');
  return await storage.remove('userInfo');
};

export const loadCacheUInfo = async () => {
  const uInfo: IUserInfo | null = (await storage.getObject('userInfo')) as any;
  if (uInfo) {
    setToken(uInfo.token);
    setUserInfo(uInfo);
  }
};
