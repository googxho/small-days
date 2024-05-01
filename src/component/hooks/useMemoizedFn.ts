/*
 * @Auther: xinhong
 * @Date: 2023-06-28 16:52:49
 * @LastEditors: xinhong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-06-28 20:07:51
 * @FilePath: \xmxx-app-plus\src\components\hooks\useMemoizedFn.ts
 * @Description:
 * 代码来源：https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useMemoizedFn/index.ts
 * 关于 this：https://www.jianshu.com/p/8b3a2513d8e5
 * 使用这个 Hook，我们可以确保在函数组件的多次渲染中，获取到的记忆化函数始终是同一个实例，
 * 以便于在依赖项不发生变化的情况下，避免不必要的函数重新创建和重新绑定。
 */

import {useMemo, useRef} from 'react';

type noop = (...args: any[]) => any;

/**
 * 持久化 function 的 hook
 */
function useMemoizedFn<T extends noop>(fn: T) {
  if (process.env.NODE_ENV === 'development') {
    if (typeof fn !== 'function') {
      console.error(
        `useMemoizedFn expected parameter is a function, got ${typeof fn}`,
      );
    }
  }

  const fnRef = useRef<T>(fn);

  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn]);

  const memoizedFn = useRef<T>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (this: T, ...args) {
      return fnRef.current.apply(this, args);
    } as T;
  }

  return memoizedFn.current;
}

export default useMemoizedFn;
