/*
 * @Auther: xinhong
 * @Date: 2023-06-28 16:52:49
 * @LastEditors: xinhong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-06-28 20:08:39
 * @FilePath: \xmxx-app-plus\src\components\hooks\useUpdate.ts
 * @Description:
 * useUpdate Hook 提供了一种便捷的方式来通过调用返回的回调函数来触发组件更新。
 */
import {useCallback, useState} from 'react';

// 自定义 Hook 用于触发组件更新
const useUpdate = () => {
  // 使用 useState Hook 创建一个虚拟状态
  const [, setState] = useState({});

  // 返回一个记忆化的回调函数，用于更新状态
  return useCallback(() => setState({}), []);
};

export default useUpdate;
