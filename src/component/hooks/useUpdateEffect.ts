/*
 * @Auther: xinhong
 * @Date: 2023-07-27 05:58:19
 * @LastEditors: xinhong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-07-27 06:00:57
 * @FilePath: \xmxx-app-plus\src\components\hooks\useUpdateEffect.ts
 * @Description:
 */
import {useRef, useEffect} from 'react';
import type {useLayoutEffect} from 'react';

type effectHookType = typeof useEffect | typeof useLayoutEffect;

export const createUpdateEffect: (hook: effectHookType) => effectHookType =
  hook => (effect, deps) => {
    const isMounted = useRef(false);

    // for react-refresh
    hook(() => {
      return () => {
        isMounted.current = false;
      };
    }, []);

    hook(() => {
      if (!isMounted.current) {
        isMounted.current = true;
      } else {
        return effect();
      }
    }, deps);
  };

export default createUpdateEffect(useEffect);
