import React, {FC, memo} from 'react';
import {View, ViewStyle, StyleSheet, Text, TextStyle} from 'react-native';
import TouchableOpacity from '../TouchableOpacity';
import {useThemeFactory} from '../Theme';
import Loading from '../Loading';
import createStyle from './style';
import type {ButtonProps} from './type';

const Button: FC<ButtonProps> = memo(props => {
  const {
    type = 'default',
    size = 'normal',
    loading,
    loadingText,
    loadingType,
    loadingSize,
    icon,
    iconPosition = 'left',
    color,
    plain,
    square,
    round,
    disabled,
    textStyle,
    children,
    // 对象的解构操作，在末尾使用...会将剩余的属性都收集到 rest 对象中。
    ...rest
  } = props;
  // useThemeFactory 调用 createStyle 函数根据入参动态生成一个 StyleSheet.create<Styles> 对象
  const {styles} = useThemeFactory(createStyle, {type, size, plain});
  const text = loading ? loadingText : children;
  // 将属性合并到一个新的样式对象中，并返回这个新的样式对象。
  const textFlattenStyle = StyleSheet.flatten<TextStyle>([
    styles.text,
    !!color && {color: plain ? color : 'white'},
    textStyle,
  ]);

  // 渲染图标
  const renderIcon = () => {
    const defaultIconSize = textFlattenStyle.fontSize;
    const iconColor = color ?? (textFlattenStyle.color as string);
    let marginStyles: ViewStyle;

    if (!text) {
      marginStyles = {};
    } else if (iconPosition === 'left') {
      marginStyles = {marginRight: 4};
    } else {
      marginStyles = {marginLeft: 4};
    }

    return (
      <>
        {icon && loading !== true && (
          <View style={marginStyles}>
            {/* React 提供的一个顶层 API，用于检查某个值是否为 React 元素 */}
            {React.isValidElement(icon)
              ? React.cloneElement(icon as React.ReactElement<any, string>, {
                  size: defaultIconSize,
                  color: iconColor,
                })
              : icon}
          </View>
        )}
        {loading && (
          <Loading
            // ?? 可选链操作符，如果 loadingSize 为 null 或 undefined ，就使用 defaultIconSize 作为默认值
            size={loadingSize ?? defaultIconSize}
            type={loadingType}
            color={iconColor}
            style={marginStyles}
          />
        )}
      </>
    );
  };
  // 渲染文本
  const renderText = () => {
    if (!text) {
      return null;
    }

    return (
      <Text selectable={false} numberOfLines={1} style={textFlattenStyle}>
        {text}
      </Text>
    );
  };

  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      activeOpacity={0.6}
      style={[
        styles.button,
        props.style,
        plain && styles.plain,
        round && styles.round,
        square && styles.square,
        disabled && styles.disabled,
        // !!是一种类型转换的方法，它可以将一个值转换为布尔类型的true或false
        !!color && {borderColor: color},
        !!color && !plain && {backgroundColor: color},
      ]}>
      {iconPosition === 'left' && renderIcon()}
      {renderText()}
      {iconPosition === 'right' && renderIcon()}
    </TouchableOpacity>
  );
});

export default Button;
