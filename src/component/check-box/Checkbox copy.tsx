/*
 * @Auther: xinhong
 * @Date: 2023-06-28 16:52:38
 * @LastEditors: googxh 49309686+googxho@users.noreply.github.com
 * @LastEditTime: 2023-09-22 14:49:12
 * @FilePath: \xmxx-app-plus\src\components\check-box\Checkbox.tsx
 * @Description: 复选框
 */
import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import {GroupContext} from './index';
import {useControllableValue} from '../hooks';
import IconFont, {IconNames} from '@gongxh/rn-vant-icons';
// import {Fill1, Fill7, Primary4, px2dp} from '@common/styles';

const isType =
  (
    t:
      | 'Array'
      | 'Object'
      | 'Function'
      | 'String'
      | 'Number'
      | 'Null'
      | 'Undefined',
  ) =>
  (v: any) =>
    Object.prototype.toString.call(v) === `[object ${t}]`;
/** 是函数 */
const isFunction = (v: any): v is Function => isType('Function')(v);

const theme = {
  gray_5: '#d9d9d9',
  checkbox_icon_border_color: '#d9d9d9',
  checkbox_icon_success_color: '#676',
  checkbox_checked_icon_color: '#666',
  checkbox_disabled_background_color: '#f5f5f5',
  checkbox_disabled_icon_color: '#d9d9d9',
  checkbox_label_color: '#666666',
  checkbox_label_margin: 0,
  checkbox_disabled_label_color: '#222',
};

export type CheckboxIconRenderParams = {
  checked: boolean;
  disabled?: boolean;
};

export interface CheckboxProps {
  /**
   * 失效状态
   */
  disabled?: boolean;
  /**
   * 指定当前是否选中
   */
  checked?: boolean;
  value?: any;
  /**
   * 初始是否选中
   */
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  style?: StyleProp<ViewStyle>;
  hitSlop?: number | {top: number; right: number; bottom: number; left: number};
  children?: React.ReactNode;
  /**
   * 形状
   * @default round
   */
  shape?: 'round' | 'square';
  /**
   * 选中状态颜色
   */
  checkedColor?: string;
  /**
   * 图标大小
   */
  iconSie?: number;
  /**
   * 选中时的IconFont图标名称
   * @default xmxx-icon-select-on
   */
  IconName?: IconNames;
  /**
   * 选中时的IconFont图标名称
   * @default xmxx-icon-disable-select-on
   */
  IconDisabledName?: IconNames;
  /**
   * 自定义图标
   */
  // icon?: (params: CheckboxIconRenderParams) => React.ReactNode | React.ReactNode;
}

const Checkbox = React.forwardRef<View, CheckboxProps>((props, ref) => {
  const {
    style,
    hitSlop,
    children,
    shape = 'square',
    checkedColor,
    iconSie = 36,
    IconName = 'xmxx-icon-select-on',
    IconDisabledName = 'xmxx-icon-disable-select-on',
    // icon,
    ...restProps
  } = props;
  const [value, onChange] = useControllableValue(props, {
    valuePropName: 'checked',
    defaultValuePropName: 'defaultChecked',
  });
  const checkboxGroup = React.useContext(GroupContext);
  const prevValue = React.useRef(restProps.value);

  const disabledIconColor = theme.gray_5;
  const disabledIconName = IconDisabledName;

  // success 图标大小
  const successIconSize = iconSie;

  React.useEffect(() => {
    checkboxGroup?.registerValue(restProps.value);
  }, []);

  React.useEffect(() => {
    if (restProps.value !== prevValue.current) {
      checkboxGroup?.cancelValue(prevValue.current);
      checkboxGroup?.registerValue(restProps.value);
    }
    return () => checkboxGroup?.cancelValue(restProps.value);
  }, [restProps.value]);

  // checkboxGroup 存在时，已 group 的为准，否则以 props 为准
  const checked = checkboxGroup
    ? checkboxGroup.value.indexOf(restProps.value) !== -1
    : value;
  const disabled = checkboxGroup
    ? restProps.disabled || checkboxGroup.disabled
    : restProps.disabled;

  const handleCheckChange = () => {
    onChange(!checked);
    if (checkboxGroup && checkboxGroup.toggleOption) {
      checkboxGroup.toggleOption({label: children, value: restProps.value});
    }
  };

  const renderIcon = () => {
    // if (icon) {
    //   return isFunction(icon) ? icon({ checked, disabled }) : icon;
    // }

    return (
      <View
        style={[
          styles.icon,
          {
            width: iconSie,
            height: iconSie,
          },
          checked && styles.iconChecked,
          shape === 'round' && {borderRadius: iconSie},
          checked &&
            checkedColor && {
              backgroundColor: checkedColor,
              borderColor: checkedColor,
            },
          disabled && styles.iconDisabled,
        ]}>
        {checked && (
          <IconFont
            name={disabled ? disabledIconName : IconName}
            size={successIconSize}
          />
        )}
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback
      hitSlop={hitSlop}
      disabled={disabled}
      onPress={handleCheckChange}>
      <View style={[styles.checkbox, style]} ref={ref}>
        {renderIcon()}
        <View style={styles.labelContainer}>
          {typeof children === 'string' ? (
            <Text
              style={[
                styles.label,
                disabled && styles.labelDisabled,
                {lineHeight: iconSie},
              ]}>
              {children}
            </Text>
          ) : (
            children
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;

const styles = StyleSheet.create({
  checkbox: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    alignItems: 'center',
    borderColor: theme.checkbox_icon_border_color,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  iconChecked: {
    backgroundColor: theme.checkbox_checked_icon_color,
    borderColor: theme.checkbox_checked_icon_color,
  },
  iconDisabled: {
    backgroundColor: theme.checkbox_disabled_background_color,
    borderColor: theme.checkbox_disabled_icon_color,
  },
  label: {
    color: theme.checkbox_label_color,
  },
  labelContainer: {
    marginLeft: theme.checkbox_label_margin,
  },
  labelDisabled: {
    color: theme.checkbox_disabled_label_color,
  },
});