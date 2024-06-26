/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-22 23:04:27
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-22 23:43:13
 * @FilePath: /small-days/src/config/request.ts
 * @Description:
 */
import axios, {AxiosRequestConfig} from 'axios';
import {baseURL} from './index';
import {getToken} from 'src/utils/auth';

export const http = axios.create();

http.interceptors.request.use(
  function (config) {
    const headers: any = {
      ...(config.headers || {}),
      'content-type': 'application/json; charset=utf-8',
      token: getToken() || 'sss',
    };
    config.headers = headers;
    return config;
  },
  function (error) {
    console.log('--error', error);
    return Promise.reject(error);
  },
);

http.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);

function sleep() {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(null), 200);
  });
}

async function request<T>(options: AxiosRequestConfig): Promise<T> {
  const p1 = http({
    ...options,
    url: baseURL + options.url,
    method: options.method || 'POST',
  });

  const p2 = sleep();
  return Promise.all([p1, p2]).then(res => {
    return res[0] as unknown as T;
  });
}

export {request};
