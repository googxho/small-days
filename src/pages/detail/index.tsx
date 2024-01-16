/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 22:25:09
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-21 22:25:17
 * @FilePath: /small-days/src/pages/detail/index.tsx
 * @Description:
 */
import * as React from 'react';
import {useState} from 'react';
import {Text, View, Button, Alert} from 'react-native';
import NativeInfoView from 'src/component/NativeInfoView';
export const kukiUri =
  'https://img-blog.csdnimg.cn/direct/a82949ee489b4f628df48302cf7fda55.png';
export const lmwUri =
  'https://img-blog.csdnimg.cn/direct/02bc3e562ca44cb9a9a0a1a0652a1abc.png';
export const descText = '你这一生从没真正舒适过，却说不想离开舒适区。';
export const descTextTwo =
  '所有人都祝你快乐，但我想对你说不快乐也没关系，焦头烂额也没关系，只希望你在自己的世界活得越来越逍遥舒心，永远有选择可做，永远有余路可退。';
export function DetailScreen() {
  const [imgUrl, setImgUrl] = useState(kukiUri);
  const [desc, setDesc] = useState(descText);
  return (
    <View style={{backgroundColor: '#ffffff', width: '100%', height: '100%'}}>
      <Text>Detail</Text>
      <Button
        title="切换头像"
        onPress={() => {
          if (imgUrl == kukiUri) {
            setImgUrl(lmwUri);
          } else {
            setImgUrl(kukiUri);
          }
        }}
      />
      <Button
        title="切换详情"
        onPress={() => {
          if (desc.length > 30) {
            setDesc(descText);
          } else {
            setDesc(descTextTwo);
          }
        }}
      />
      <NativeInfoView
        avatar={imgUrl}
        desc={desc}
        onShapeChange={e => {
          Alert.alert(e.nativeEvent.shape);
        }}
      />
    </View>
  );
}
