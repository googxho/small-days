import React from 'react';
import {ViewProps, requireNativeComponent} from 'react-native';
import {NativeEvent} from 'react-native-reanimated/lib/typescript/reanimated2/commonTypes';

type NativeInfoViewType =
  | ViewProps
  | {
      avatar: String;
      desc: string;
      onShapeChange: (e: NativeEvent<any>) => void;
    };

const NativeInfoView =
  requireNativeComponent<NativeInfoViewType>('NativeInfoView');

export default (props: {
  avatar: String;
  desc: string;
  onShapeChange: (e: NativeEvent<any>) => void;
}) => {
  return (
    <NativeInfoView
      style={{width: '100%', height: '100%'}}
      avatar={props.avatar}
      desc={props.desc}
      onShapeChange={props.onShapeChange}
    />
  );
};
