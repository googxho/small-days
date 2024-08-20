import IconFont from '@/component/rn-kuki-icons';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  StyleProp,
  ViewStyle,
} from 'react-native';

const ScrollTop: React.FC<{
  title: string;
  handleScreen: Function;
  style?: StyleProp<ViewStyle>;
  fadeInAnimated: any;
  fadeX: any;
}> = ({title, handleScreen, style, fadeInAnimated, fadeX}) => {
  return (
    <Animated.View
      style={[
        styles.screenBtn,
        {
          bottom: 0,
          opacity: fadeInAnimated,
          transform: [{translateY: fadeX}],
        },
        style,
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          handleScreen && handleScreen();
        }}>
        {/* 回到顶部 */}
        {/* <Shadow
          elevation={1}
          style={{
            borderRadius: 50,
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
          <View style={styles.screenWrap}>
            <IconFont name="xmxx-icon-to-top" size={36} color={'#FFFFFF'} />
            <Text style={styles.screenText}>{title}</Text>
          </View>
        </Shadow> */}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ScrollTop;

const styles = StyleSheet.create({
  screenBtn: {
    position: 'absolute',
    bottom: 14,
    left: '50%',
    marginLeft: 30,
    zIndex: 10,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgba(0,0,0,0.06)'
  },
  screenWrap: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    fontSize: 22,
    color: '#FFFFFF',
    lineHeight: 32,
  },
});
