/*
 * @Author: GaoXiong
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-25 12:14:18
 * @FilePath: /small-days/src/stores/global.ts
 * @Description:
 */

import {runInAction, makeAutoObservable, observable} from 'mobx';
import {makePersistable} from 'mobx-persist-store';

export class GlobalStore {
  userToken: string = 'ooo';
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'GlobalStore',
      properties: ['userToken'],
    });
  }

  loading = false;

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

  async logout() {}
}
