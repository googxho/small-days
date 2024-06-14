/*
 * @Author: panmingjie
 * @Date: 2023-06-20 17:02:56
 * @LastEditors: linyan
 * @LastEditTime: 2024-01-22 16:43:56
 * @Description: 自定义数字输入框
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Component} from 'react';
const {
  Border3 = '#CCCCCC',
  Fill1 = '#FFFFFF',
  Fill6 = '#EBEBEB',
  Primary1 = '#E1F2E5',
  Primary4 = '#389751',
  Text2 = '#BFBFBF',
  Text6 = '#000000',
} = {};

// 清掉输入的非数字
export function clearNoNum(value: string) {
  let val = value;
  if (typeof val === 'number') {
    val = `${value}`;
  }
  // 先把非数字的都替换掉，除了数字和.
  val = val.replace(/[^\d.]/g, '');
  // 必须保证第一个为数字而不是.
  val = val.replace(/^\./g, '');
  // 保证只有出现一个.而没有多个.
  val = val.replace(/\.{2,}/g, '.');
  // 保证.只出现一次，而不能出现两次以上
  val = val.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
  return val;
}

// 输入不能超过两位小数
export function clearDotNumTo2(val: string) {
  if (/^00/.test(val)) {
    return '0';
  }
  if (
    val.indexOf('.') != -1 &&
    val.substring(val.indexOf('.'), val.length).length > 2
  ) {
    val = val.slice(0, val.indexOf('.') + 3);
  }
  if (val[0] == '0' && val[1] == '0') {
    val = val.slice(1, val.length);
  }

  return val;
}

import InputManger from './input-manger';

interface InputProps {
  onPress: Function; //点击回调
  canInput: boolean; //能否输入
  style: StyleProp<ViewStyle>; //整体容器样式
  innerStyle: StyleProp<ViewStyle>; //内部容器样式
  selectStyle: StyleProp<ViewStyle>; //选中的样式
  cantInputStyle: StyleProp<ViewStyle>; //不能否输入的样式
  centerStyle: StyleProp<ViewStyle>; //中间显示的样式
  centerFocusStyle: StyleProp<ViewStyle>; //中间显示有焦点的样式
  renderFocusLeft: React.ReactElement; //左边显示有焦点的组件
  renderLeft: React.ReactElement; //左边显示默认的组件
  renderTop: React.ReactElement; //顶部显示默认的组件
  renderFocusTop: React.ReactElement; //顶部显示有焦点的组件
  renderRight: React.ReactElement; //右边显示默认的组件
  renderFocusRight: React.ReactElement; //右边显示有焦点的组件
  textStyle: StyleProp<TextStyle>; //文字样式
  textFocusStyle: StyleProp<TextStyle>; //文字有焦点的样式
  cursorStyle: StyleProp<TextStyle>; //光标样式
  adjustsFontSizeToFit: boolean; //是否自动调整字体大小
  symbol?: string; //金额左边显示的符号
  value?: string; //输入的内容
  hint: string; //没有输入内容的提示语句
  onFocus: Function; //焦点变化后的回调
  isInteger: boolean; //是否只能输入整数
  maxNumber: number; //可以输入的最大值
  onValueChange: (value: string) => void | null; //值变化的回调
  inputManger: InputManger; //输入管理
  isFocus: boolean; //是否有焦点
}

interface InputState {
  fadeAnim: Animated.Value; //动画属性
  isFocus?: boolean; //是否有焦点
  isFoucsFirstInput: boolean; //是否是有焦点后首次输入
  showValue: string;
}

export default class NumberInput extends Component<
  Partial<InputProps>,
  InputState
> {
  static defaultProps = {
    maxNumber: 99999999.99,
    canInput: true,
  };
  constructor(props: InputProps) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      isFocus: false,
      showValue: props.value || '',
      isFoucsFirstInput: false,
    };
  }

  UNSAFE_componentWillMount() {
    const {isFocus} = this.props;
    const {inputManger} = this.props;
    if (isFocus) {
      inputManger?.setFocusView(this);
    }
    this.setState({isFocus});
  }

  UNSAFE_componentWillReceiveProps(
    nextProps: Readonly<Partial<InputProps>>,
    nextContext: any,
  ): void {
    // console.log('UNSAFE_componentWillReceiveProps======',nextProps.value);

    if (this.state.showValue != nextProps.value) {
      this.setState({showValue: nextProps.value || ''});
    }
  }

  // static getDerivedStateFromProps(nextProps: Readonly<Partial<InputProps>>, nextState: Readonly<InputState>){
  //   console.log(nextState.showValue+'---'+nextProps.value)
  //    if(nextState.showValue!=nextProps.value){
  //     return {
  //       showValue:nextProps.value||''
  //     }
  //    }
  //  return
  // }

  // shouldComponentUpdate(nextProps: Readonly<Partial<InputProps>>, nextState: Readonly<InputState>, nextContext: any): boolean {
  //     const {showValue} = this.state
  //   if(nextProps.value!=showValue){
  //     this.setState({showValue:nextProps.value||''})
  //     return true
  //   }
  //     return false
  // }

  setSelect = (isFocus: boolean) => {
    const {onFocus, inputManger} = this.props;
    const {fadeAnim} = this.state;
    onFocus && onFocus(isFocus);

    this.setState({
      isFocus,
      isFoucsFirstInput: this.state.isFocus ? false : true, //之前是没有选择状态，才需要设置为首次获取焦点标记
    });
    //根据焦点情况，是否显示光标动画
    if (isFocus) {
      const animationSlider = Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          easing: Easing.ease,
          duration: 550,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          // easing: Easing.in,
          duration: 550,
          useNativeDriver: false,
        }),
      ]);
      Animated.loop(animationSlider).start();
    } else {
      fadeAnim.stopAnimation();
    }
  };

  //获取当前的焦点
  getIsFocus = () => {
    const {isFocus} = this.state;
    return isFocus;
  };

  //获取有焦点后是否首次输入
  getFocusFirstInput = () => {
    const {isFoucsFirstInput} = this.state;
    return isFoucsFirstInput;
  };

  //获取当前是否能输入
  getCanInput = () => {
    const {canInput} = this.props;
    return canInput;
  };
  //读取当前输入的值
  getValue = () => {
    const {showValue} = this.state;
    return showValue;
  };

  setValue = (newValue: string, isCallBack = true) => {
    console.log('---setValue---', newValue);
    let {isInteger, maxNumber, onValueChange} = this.props;

    if (newValue == '') {
      this.setState({showValue: newValue, isFoucsFirstInput: false});
      isCallBack && onValueChange && onValueChange('0');
      return;
    }

    if (isInteger) {
      maxNumber = Number((maxNumber - 0.5).toFixed(0));
    }

    const {showValue} = this.state;
    // 去掉非数字内容
    newValue = clearNoNum(newValue);
    newValue = clearDotNumTo2(newValue);
    if (isInteger) {
      newValue = newValue.replace('.', '');
    }

    if (
      newValue.indexOf('.') < 0 &&
      newValue.length >= 2 &&
      newValue[0] == '0'
    ) {
      newValue = newValue.substr(1, newValue.length);
    }

    // 没有变化值不进行通知
    if (newValue && showValue == newValue) {
      this.setState({isFoucsFirstInput: false});
      return;
    }
    // 超过上限自动回填
    if (Number(newValue) > maxNumber) {
      // setShowValue(`${maxNumber}`);
      // this.setState({ showValue: `${maxNumber}`, isFoucsFirstInput: false });
      // 防抖，防止频繁触发
      // debounce(() => {
      // isCallBack && onValueChange && onValueChange(`${maxNumber}`);
      // }, 300);

      // backfill && backfill();
      return;
    }
    this.setState({showValue: newValue, isFoucsFirstInput: false});
    // debounce(() => {
    isCallBack && onValueChange && onValueChange(newValue);
    // }, 300);
  };

  componentDidMount() {
    const {inputManger} = this.props;
    inputManger?.addView(this);
  }
  componentWillUnmount() {
    const {inputManger} = this.props;
    inputManger?.removeView(this);
  }

  render() {
    const {
      onPress,
      canInput = true,
      style,
      innerStyle,
      selectStyle,
      cantInputStyle,
      centerStyle,
      centerFocusStyle,
      renderFocusLeft = null,
      renderLeft = null,
      renderTop = null,
      renderFocusTop = null,
      renderRight = null,
      renderFocusRight = null,
      textStyle,
      textFocusStyle,
      cursorStyle,
      adjustsFontSizeToFit,
      symbol,
      value,
      hint,
      onFocus,
      onValueChange,
    } = this.props;
    const {isFocus, fadeAnim, showValue} = this.state;
    const {inputManger} = this.props;

    return (
      <View
        style={[
          style,
          {
            backgroundColor: isFocus && canInput ? Primary1 : 'transparent',
            borderRadius: 12,
            justifyContent: 'center',
            padding: 8,
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            onPress && onPress();
            if (!canInput) {
              return;
            }
            this.setSelect(true);
            inputManger?.setFocusView(this);
            // NumberInputManger.getIntance().setSelectView(this, useComponent);
          }}
          style={[
            styles.innerContainer,
            innerStyle,
            isFocus && (selectStyle || {borderColor: Primary4}),
            !canInput && styles.cantInput,
            !canInput && cantInputStyle,
          ]}>
          {!isFocus && renderTop}

          {isFocus && (renderFocusTop || renderTop)}

          <View
            style={[
              {flexDirection: 'row', justifyContent: 'center'},
              centerStyle,
              isFocus && centerFocusStyle,
            ]}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
              }}>
              {!isFocus && renderLeft}

              {isFocus && (renderFocusLeft || renderLeft)}

              <Text
                numberOfLines={1}
                adjustsFontSizeToFit={adjustsFontSizeToFit || false}
                style={[
                  {
                    color: isFocus || showValue ? Text6 : Text2,
                    fontSize: 48,
                    fontWeight: 'bold',
                    flex: 1,
                    textAlign: 'right',
                    textAlignVertical: 'center',
                    paddingLeft: 16,
                    borderRadius: 8,
                  },
                  textStyle,
                  isFocus && textFocusStyle,
                ]}>
                {symbol}
                {showValue || (!isFocus && hint) || '0'}
              </Text>

              {isFocus && canInput && (
                <Animated.View
                  style={[
                    {
                      backgroundColor: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['#F4F4F4', Primary4],
                      }),
                      height: 40,
                      width: 4,
                    },
                    cursorStyle,
                  ]}
                />
              )}

              {!isFocus && renderRight}

              {isFocus && (renderFocusRight || renderRight)}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: 'center',
    borderWidth: 4,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    flexShrink: 1,
    borderColor: Border3,
    backgroundColor: Fill1,
  },
  cantInput: {
    backgroundColor: Fill6,
    borderColor: Fill6,
  },
});
