/*
 * @Author: GaoXiong
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-25 12:14:18
 * @FilePath: /small-days/src/stores/global.ts
 * @Description:
 */

import {runInAction, makeAutoObservable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';

export class GlobalStore {
  userToken: string = 'ooo';
  theme: string = 'light';
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'globalStore',
      properties: ['userToken'],
    });
  }

  loading = false;

  setTheme(theme: string) {
    this.theme = theme;
  }

  async login() {
    runInAction(() => {
      this.loading = true;
    });
    try {
      runInAction(() => {
        this.loading = false;
      });
    } catch (err) {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async logout() {
    //
  }
}
