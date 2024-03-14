import React, {useEffect} from 'react';
import {TouchableOpacity, Image, StyleSheet, Text} from 'react-native';

type IReactComponent =
  | React.ClassicComponentClass
  | React.ComponentClass
  | React.FunctionComponent
  | React.ForwardRefExoticComponent<any>;

import icon_add from '../assets/icon_add.png';

export default <T extends IReactComponent>(
  OriginView: T | React.FC,
  type: string,
): T => {
  const HOCView = (props: any) => {
    useEffect(() => {
      // 调用接口实现设备信息上报
    }, []);
    return (
      <>
        <OriginView {...props} />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            console.log('onPress ...', type);
          }}>
          <Image style={styles.addImg} source={icon_add} />
        </TouchableOpacity>
      </>
    );
  };

  return HOCView as T;
};

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 28,
  },
  addImg: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
  },
});
