/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 23:39:50
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-22 23:51:33
 * @FilePath: /small-days/src/services/login.ts
 * @Description:
 */
import {request} from '@config/request';

// 登录
export interface ILoginReq {
  account: string;
  password: string;
}
export const login = (data: ILoginReq) => {
  return request<ILoginReq>({url: '/login', data});
};

export const getSecurityCode = () => {
  return request<ILoginReq>({url: '/getSecurityCode', method: 'get'});
};

export const getUserInfo = () => {};

export const logout = () => {};

export const register = () => {};
