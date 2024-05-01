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
import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {useStore} from '@stores/index';
import {ThemeContext} from 'src/component/ThemeContext';
import {FlashList} from '@shopify/flash-list';
import acidList from 'src/assets/7791387030.json';

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
      <Text style={{fontSize: 20, color: 'red', marginTop: 20}}>home</Text>
      <Button
        title="切换主题"
        onPress={() => {
          if (global.theme === 'dark') {
            global.setTheme('light');
          } else {
            global.setTheme('dark');
          }
          console.log('====================================');
          console.log(global, theme);
          console.log('====================================');
        }}
      />
      <FlatList
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
      />
    </View>
  );
};

export default observer(_HomeScreen);

const darkStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#353535',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 64,
  },
});

const lightStyles = StyleSheet.create({
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fafafa',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 64,
  },
});
