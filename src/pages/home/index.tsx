/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-21 21:46:28
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-21 22:38:56
 * @FilePath: /small-days/src/pages/home/index.tsx
 * @Description:
 */
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from 'src/navigator';
import {MainTabParamList} from 'src/navigator/MainTab';
import {observer} from 'mobx-react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useStore} from '@stores/index';
import {ThemeContext} from 'src/component/ThemeContext';
import {FlashList} from '@shopify/flash-list';
import acidList from 'src/assets/7791387030.json';
import {Button, Cell} from 'src/component/rn-kuki-ui';

type INavigateProps = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Me'>,
  StackScreenProps<RootStackParamList>
>;

const _HomeScreen: React.FC = () => {
  // const store = useStore();
  const navigation = useNavigation<INavigateProps['navigation']>();
  const {global} = useStore();

  const theme = useContext(ThemeContext);

  const styles = global.theme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.content}>
      <Button
        onPress={() => {
          if (global.theme === 'dark') {
            global.setTheme('light');
          } else {
            global.setTheme('dark');
          }
          console.log('====================================');
          console.log(global, theme);
          console.log('====================================');
        }}>
        切换主题HOME
      </Button>
      {/* <FlatList
        data={acidList}
        keyExtractor={item => item?.wid}
        renderItem={({item, index}) => (
          <View style={{width: '100%', marginVertical: 20}}>
            <Text style={{fontSize: 26, color: '#000'}}>{item?.content}</Text>
            <View style={{justifyContent: 'flex-start'}}>
              {item?.img_urls
                ?.split(' ')
                .filter(v => v.length > 0)
                .map(url => (
                  <Image
                    key={url}
                    resizeMode="cover"
                    source={{uri: url}}
                    style={{width: 160, height: 200}}
                  />
                ))}
            </View>
          </View>
        )}
      /> */}
      <Cell.Group title="按钮">
        <Button plain type="primary">
          朴素按钮
        </Button>
        <Button plain type="success">
          朴素按钮
        </Button>
        <Button loading type="primary" />
        <Button loading type="primary" loadingType="spinner" />
        <Button loading type="success" loadingText="加载中..." />
      </Cell.Group>
      <Cell.Group title="分组2">
        <Cell title="单元格" value="内容" />
      </Cell.Group>
    </View>
  );
};

export default observer(_HomeScreen);

const darkStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#353535',
  },
});

const lightStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
  },
});
