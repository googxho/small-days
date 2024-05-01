/*
 * @Auther: xinhong
 * @Date: 2023-06-28 16:52:38
 * @LastEditors: xinhong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-06-28 20:00:02
 * @FilePath: \xmxx-app-plus\src\components\check-box\index.ts
 * @Description: 复选框
 */
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import InternalCheckbox from './Checkbox';
import Group from './Group';

export type {CheckboxProps} from './Checkbox';
export type {CheckboxGroupProps} from './Group';

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: React.ReactNode;
  value: CheckboxValueType;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onChange?: () => void;
}

export interface CheckboxGroupContext {
  toggleOption?: (option: CheckboxOptionType) => void;
  value?: any;
  disabled?: boolean;
  registerValue: (val: string) => void;
  cancelValue: (val: string) => void;
}

export const GroupContext = React.createContext<CheckboxGroupContext | null>(
  null,
);

type CheckboxType = typeof InternalCheckbox;

interface CheckboxProps extends CheckboxType {
  Group: typeof Group;
  __ANT_CHECKBOX: boolean;
}

export const Checkbox = InternalCheckbox as CheckboxProps;

Checkbox.Group = Group;
Checkbox.__ANT_CHECKBOX = true;

export default Checkbox;
