/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 23:08:11
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-22 23:08:16
 * @FilePath: /small-days/src/types/userInfo.ts
 * @Description:
 */
export interface IUserInfo {
  avatar: string;
  email: string;
  gender: number;
  id: number;
  nickname: string;
  mobile: string | null;
  loginTime: string | null;
  college: string | null;
  residence: string | null;
  words: string | null;
  createTime: string | null;
  background: string | null;
  token: string;
}
