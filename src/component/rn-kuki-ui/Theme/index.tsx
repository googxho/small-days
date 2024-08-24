import {useMemo} from 'react';
import {createTheming} from '@callstack/react-theme-provider';
import type {StyleSheet} from 'react-native';
import {defaultTheme} from '../styles';
// 创建主题对象：调用 createTheming 函数并传入一个默认主题作为参数
export const {ThemeProvider, withTheme, useTheme} = createTheming<DiceUI.Theme>(
  defaultTheme as DiceUI.Theme,
);

type ThemeFactoryCallBack<T extends StyleSheet.NamedStyles<T>> = {
  styles: T;
  theme: DiceUI.Theme;
};

export function useThemeFactory<T extends StyleSheet.NamedStyles<T>, P>(
  fun: (theme: DiceUI.Theme, ...extra: P[]) => T,
  ...params: P[]
): ThemeFactoryCallBack<T> {
  // 钩子，用于在函数组件中获取当前的主题
  const theme = useTheme();
  const styles = useMemo(() => fun(theme, ...params), [fun, theme, params]);

  return {styles, theme};
}

export default {
  ThemeProvider,
  withTheme,
  useTheme,
  useThemeFactory,
};
