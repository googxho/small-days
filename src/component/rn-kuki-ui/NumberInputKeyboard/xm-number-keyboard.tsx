/*
 * @Author: kanglang
 * @Date: 2021-11-16 15:53:04
 * @LastEditors: qinzhenhao
 * @LastEditTime: 2023-08-04 16:36:23
 * @Description: 数字输入键盘
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TouchableHighlight,
  Text,
  LayoutChangeEvent,
  Platform,
  NativeModules,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import InputManger from './input-manger';
import IconFont, {IconNames} from '@/iconfont';

const colorFCFCFC = '#FCFCFC';
const colorDEDEDE = '#DEDEDE';
const colorC94800 = '#C94800';
const colorFF9900 = '#FF9900';
const color353C5E = '#353C5E';
const color4D5A89 = '#4D5A89';
const color4CBC65 = '#4CBC65';
const color389751 = '#389751';
const colorA6A6A6 = '#A6A6A6';
const colorA1A9B2 = '#A1A9B2';
const Border3 = '#CCCCCC';
const isAndroid = Platform.OS === 'android'; // 判断是否为安卓
// const isIOS = Platform.OS === 'ios'; // 判断是否为iOS

/**
 * 播放声音文件
 * @param msg 文件标识
 */
export function playText(msg: string) {
  NativeModules.SmallDaysApp.playText(msg);
}

//播放生意的文字type
enum PlayTextType {
  DELETE = '退位',
  CLEAR = '清除',
  CREDIT = '赊欠',
  REPAYMENT = '还款',
  NEXT = '下一项',
  CONFIRM_CASH = '确认收银',
  CONFIRM = '确认',
  NOCREDIT = 'nocredit', //不能赊欠
}

//键盘不能点击
export class NoClick {}

const KeyItem: React.FC<{
  textIconName?: IconNames; //图标
  text?: string; //文本
  onPress?: () => void;
  colors?: string[];
  style?: StyleProp<ViewStyle>;
  canClick?: boolean; //能否点击
  itemHeight?: number;
}> = ({
  textIconName = 'base-icon-check',
  text,
  onPress,
  colors = [colorFCFCFC, colorDEDEDE],
  style,
  canClick = true,
  itemHeight = 56,
}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      style={[styles.itemStyle, style]}
      underlayColor="transparent"
      onPress={
        canClick
          ? () => {
              onPress && onPress();
            }
          : undefined
      }>
      <LinearGradient
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          elevation: 3,
        }}
        colors={canClick ? colors : [Border3, colorA6A6A6]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        {text ? (
          <Text
            style={[
              !canClick && {opacity: 0.5},
              {
                fontSize: 20,
                color: '#000000',
                textAlign: 'center',
                fontWeight: 'bold',
              },
            ]}>
            {text}
          </Text>
        ) : (
          <IconFont name={textIconName} size={itemHeight * 0.77} />
        )}
      </LinearGradient>
    </TouchableHighlight>
  );
};

const XmNumberKeyboard: React.FC<{
  style?: StyleProp<ViewStyle>; //容器样式
  isShowClear?: boolean; //是否显示清除按钮
  isShowLongClear?: boolean; //是否显示长一点的清楚按钮
  isShowdarkblueClear?: boolean; //是否显示深蓝色的清除按钮
  isVoice?: boolean; //是否开启语音
  isShowNext?: boolean; //是否显示下一项
  isShowLongNext?: boolean; // 是否显示长的下一项
  onCredit?: (() => void) | NoClick; //赊欠点击
  onConfirm?: () => void | NoClick; //确认点击
  onMiddleConfirm?: () => void | NoClick; //中等大小的确认
  onLongConfirm?: () => void | NoClick; //长的确认按钮点击
  onLongConfirRepayment?: () => void; //确认还款
  onMiddleCash?: () => void | NoClick; //中等大小的确认收银
  voiceInterceptor?: (text?: string) => boolean; //声音播放的拦截器，可能部分生意需要特殊处理
  onDissmiss?: () => void; //消失按钮点击回调
  keyBoardStyle?: StyleProp<ViewStyle>;
  kerBoardTopView?: () => React.ReactNode; //顶部View
  inputManger?: InputManger; //输入管理
}> = ({
  style, //  自定义样式
  isVoice = true, // 是否开启数字键盘的语音提醒，默认开启
  isShowClear = false, // 是否显示清除
  isShowLongClear = false, // 是否显示长一点的清楚按钮,
  isShowdarkblueClear = false, //是否显示深蓝色的清除按钮
  isShowNext = false, // 是否显示下一项
  isShowLongNext = false, // 是否显示长下一项
  onCredit, // 赊欠方法
  onConfirm, // 确认
  onMiddleConfirm, //中等大小的确认
  onLongConfirm, //长的确认按钮
  onLongConfirRepayment,
  onMiddleCash, //中等大小的确认收银
  voiceInterceptor,
  onDissmiss,
  keyBoardStyle,
  kerBoardTopView,
  inputManger,
}) => {
  const [itemHeight, setItemHeight] = useState(0);
  const keyBoardView = useRef<TouchableOpacity>(null);

  const handleLayout = (event: LayoutChangeEvent) => {
    const {x, y, width, height} = event.nativeEvent.layout;
    setItemHeight((height - 16 * 3) / 4);
  };

  useEffect(() => {
    keyBoardView?.current?.measure((x, y, width, height, pageX, pageY) => {
      if (height != 0) {
        setItemHeight((height - 16 * 3) / 4);
      }
    });
  }, []);

  /**
   * 播放声音
   */
  const voiceManage = (text: string) => {
    //没有开启播放声音
    // xmToast.tip('----'+globalStore.isOrderVoiceConfig.itemValue)

    if (!isVoice) {
      return;
    }
    //拦截语音后单独进行处理
    if (voiceInterceptor && voiceInterceptor(text)) {
      return;
    }

    if (text == '.') {
      playText('点');
    } else {
      playText(text);
    }
  };
  /**
   * 数值点击方法
   * @param value
   */
  const onHandle = (value: string) => {
    voiceManage(value);
    inputManger?.inputText(value);
    // NumberInputManger.getIntance().setText(value,useComponent)
    console.log(`输入内容：${value}`);
    // keyboardInputChange && keyboardInputChange.textChange(value);
  };

  const onNextHandle = () => {
    voiceManage('下一项');
    // NumberInputManger.getIntance().toNext(useComponent);
    inputManger?.toNextFocus();
  };

  const onDelHandle = () => {
    voiceManage(PlayTextType.DELETE);
    inputManger?.delete();
    // keyboardInputChange && keyboardInputChange.deleteText();
  };

  const onClear = () => {
    voiceManage(PlayTextType.CLEAR);
    inputManger?.clear();
    // keyboardInputChange && keyboardInputChange.clearText();
  };

  const onButtonAction = (voice: PlayTextType, fun: () => void) => {
    voiceManage(voice);
    //执行方法
    fun();
  };

  // 右边按钮显示
  const rightkeyBoardView = () => {
    const views = [];
    if (isShowLongClear) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 2}}
          colors={[colorFF9900, colorC94800]}
          text={'清除'}
          onPress={onClear}
        />,
      );
    }

    if (isShowClear) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 0, height: itemHeight}}
          colors={[colorFF9900, colorC94800]}
          text={'清除'}
          onPress={onClear}
        />,
      );
    }

    if (isShowdarkblueClear) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{height: itemHeight}}
          colors={[color4D5A89, color353C5E]}
          text={'清除'}
          onPress={onClear}
        />,
      );
    }

    if (isShowNext) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 0, height: itemHeight}}
          colors={[color4D5A89, color353C5E]}
          text={'下一项'}
          onPress={onNextHandle}
        />,
      );
    }

    if (isShowLongNext) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 2}}
          colors={[color4D5A89, color353C5E]}
          text={'下一项'}
          onPress={onNextHandle}
        />,
      );
    }

    if (onCredit) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 1.5}}
          canClick={typeof onCredit === 'function'}
          colors={[colorFF9900, colorC94800]}
          onPress={() => {
            onButtonAction(PlayTextType.CREDIT, onCredit as () => void);
          }}
          text={'整单\n赊欠'}
        />,
      );
    }

    if (onConfirm) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 0, height: itemHeight}}
          canClick={typeof onConfirm === 'function'}
          colors={[color4CBC65, color389751]}
          onPress={() => {
            onButtonAction(PlayTextType.CONFIRM, onConfirm as () => void);
          }}
          text={'确认'}
        />,
      );
    }

    if (onMiddleConfirm) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 1.5}}
          canClick={typeof onMiddleConfirm === 'function'}
          colors={[color4CBC65, color389751]}
          onPress={() => {
            onButtonAction(PlayTextType.CONFIRM, onMiddleConfirm as () => void);
          }}
          text={'确认'}
        />,
      );
    }
    if (onLongConfirm) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 2}}
          canClick={typeof onLongConfirm === 'function'}
          colors={[color4CBC65, color389751]}
          onPress={() => {
            onButtonAction(PlayTextType.CONFIRM, onLongConfirm as () => void);
          }}
          text={'确认'}
        />,
      );
    }
    if (onLongConfirRepayment) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 2}}
          canClick
          colors={[color4CBC65, color389751]}
          onPress={() => {
            onButtonAction(PlayTextType.REPAYMENT, onLongConfirRepayment);
          }}
          text={'确认还款'}
        />,
      );
    }

    if (onMiddleCash) {
      views.push(
        <KeyItem
          key={`${views.length}`}
          style={{flex: 1.5}}
          canClick={typeof onMiddleCash === 'function'}
          colors={[color4CBC65, color389751]}
          onPress={() => {
            onButtonAction(
              PlayTextType.CONFIRM_CASH,
              onMiddleCash as () => void,
            );
          }}
          text={'确认\n收银'}
        />,
      );
    }

    return (
      <View key={'keyBorderViewRight'} style={{flex: 1, height: '100%'}}>
        {views.map((item: React.ReactElement, index) => {
          if (index < views.length - 1) {
            return React.cloneElement(item, {
              key: `${index}`,
              style: {...item.props.style, marginBottom: 16},
            });
          }

          return React.cloneElement(item, {
            key: `${index}`,
          });
        })}
      </View>
    );
  };
  return (
    <View style={[{alignItems: 'center'}, style]}>
      {!!onDissmiss && (
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 48,
          }}
          onPress={onDissmiss}>
          <IconFont
            name="xmxx-icon-keyboard-collapse"
            color={colorA1A9B2}
            size={72}
          />
        </TouchableOpacity>
      )}
      {kerBoardTopView && kerBoardTopView()}
      <TouchableOpacity
        activeOpacity={1}
        ref={keyBoardView}
        style={[styles.contanier, keyBoardStyle]}
        onLayout={handleLayout}>
        {!!itemHeight && [
          <View
            key="numberKeyboardNumber"
            style={{
              flex: 3,
              height: '100%',
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginBottom: 16,
              }}>
              <KeyItem
                textIconName="xmxx-icon-calculator-7"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('7');
                }}
              />
              <KeyItem
                textIconName="xmxx-icon-calculator-8"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('8');
                }}
              />
              <KeyItem
                textIconName="xmxx-icon-calculator-9"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('9');
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginBottom: 16,
              }}>
              <KeyItem
                textIconName="xmxx-icon-calculator-4"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('4');
                }}
              />
              <KeyItem
                textIconName="xmxx-icon-calculator-5"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('5');
                }}
              />
              <KeyItem
                textIconName="xmxx-icon-calculator-6"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('6');
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                marginBottom: 16,
              }}>
              <KeyItem
                textIconName="xmxx-icon-calculator-1"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('1');
                }}
              />
              <KeyItem
                textIconName="xmxx-icon-calculator-2"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('2');
                }}
              />
              <KeyItem
                textIconName="xmxx-icon-calculator-3"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('3');
                }}
              />
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
              <KeyItem
                textIconName="xmxx-icon-calculator-0"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('0');
                }}
              />
              <KeyItem
                textIconName="xmxx-icon-calculator-point"
                itemHeight={itemHeight}
                onPress={() => {
                  onHandle('.');
                }}
              />
              <KeyItem
                textIconName="xmxx-icon-calculator-back"
                itemHeight={itemHeight}
                onPress={onDelHandle}
              />
            </View>
          </View>,
          rightkeyBoardView(),
        ]}
      </TouchableOpacity>
    </View>
  );
};

export default XmNumberKeyboard;

const styles = StyleSheet.create({
  contanier: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    aspectRatio: 1.42,
    marginBottom: isAndroid ? 24 : 12,
  },
  keybord: {
    width: 240,
    height: 186,
    marginHorizontal: 7,
    marginVertical: 3,
  },
  rightKeybord: {
    width: 240,
    height: 372,
    marginHorizontal: 7,
    marginVertical: 3,
  },
  middleButton: {
    width: 240,
    height: 279,
    marginHorizontal: 7,
    marginVertical: 3,
  },
  itemStyle: {
    flex: 1,
    // height: '100%',
    marginHorizontal: 8,
  },
});
