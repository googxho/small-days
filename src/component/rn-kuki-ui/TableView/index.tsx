import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  findNodeHandle,
  NativeModules,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
  Animated,
  Easing,
} from 'react-native';
import ScrollTop from './scroll-top';
import {useFocusEffect} from '@react-navigation/native';
import {debounce} from 'lodash-es';
import Loading from '../Loading';
import constants from '../utils/constants';

const TableView: React.FC<{
  datas: Array<any>;
  renderRowSticky?: (item: any, index: number) => React.ReactElement;
  renderRow?: (item: any, index: number) => React.ReactElement;
  headers?: React.ReactElement | Array<React.ReactElement>;
  tableHeadLeftComponents?: React.ReactElement;
  tableHeadComponents?: React.ReactElement;
  stickyHeaderIndices?: number[] | undefined;
  style?: StyleProp<ViewStyle>;
  pageSize?: number;
}> = ({
  datas,
  tableHeadLeftComponents,
  tableHeadComponents,
  renderRow,
  renderRowSticky,
  stickyHeaderIndices,
  style,
  pageSize = 20,
  headers,
}) => {
  // 第一个水平的scrollview
  const scrollView1 = useRef(null);
  // 第二个水平的scrollview
  const scrollView2 = useRef(null);

  // 垂直方向的滚动
  const mainScrollRef = useRef<ScrollView>(null);
  // 显示的数据源
  const [showDatas, setDatas] = useState<Array<any>>([]);
  const [fadeInAnimated] = useState(new Animated.Value(1)); // 初始化动画
  const [fadeX] = useState(new Animated.Value(0)); // 初始化动画
  const [isHasHide, setHide] = useState(false); // 是否隐藏
  const [showTop, setShowTop] = useState(false);
  const animationParam = {
    duration: 200,
    easing: Easing.ease,
    useNativeDriver: true,
  };

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (!datas || datas.length == 0) {
        return;
      } // 一次加载10条
      if (showDatas.length < (datas?.length || 0)) {
        // 剩余数据大于10条
        if ((datas?.length || 0) < showDatas.length + pageSize) {
          setDatas(datas);
        } else {
          setDatas(
            showDatas.concat(
              datas?.slice(showDatas.length, showDatas.length + pageSize),
            ),
          );
        }
        clearTimeout(timer);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [showDatas]);

  useEffect(() => {
    if (!datas || datas.length == 0) {
      setDatas([]);
      return;
    }

    console.log('=====loadData=========>');
    // const tag1 = findNodeHandle(scrollView1?.current);
    // const tag2 = findNodeHandle(scrollView2?.current);
    // if (tag1 && NativeModules.DataModule.linkScrollView) {
    //   NativeModules.DataModule.linkScrollView(tag1, tag2);
    // }

    if (datas && datas.length > 0) {
      if (datas.length > pageSize) {
        setDatas(datas.slice(0, pageSize));
      } else {
        setDatas(datas);
      }
    } else {
      setDatas([]);
    }
  }, [datas]);

  useFocusEffect(
    React.useCallback(() => {
      if (!datas || datas.length == 0) {
        // setDatas([]);
        return;
      }
      console.log('=====首次进来调用调用滚动=========>');
      const tag1 = findNodeHandle(scrollView1?.current);
      const tag2 = findNodeHandle(scrollView2?.current);
      // if (tag1 && NativeModules.DataModule.linkScrollView) {
      //   // NativeModules.DataModule.linkScrollView(tag1, tag2);
      // }
    }, [datas]),
  );

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView
        ref={mainScrollRef}
        style={[{flex: 1}, style]}
        stickyHeaderIndices={stickyHeaderIndices}
        onScroll={event => {
          if (
            event.nativeEvent.contentOffset.y <
            constants.screenHeight * 0.2
          ) {
            return;
          }
          setShowTop(true);
        }}
        onScrollBeginDrag={() => {
          if (!isHasHide) {
            setHide(true);
            Animated.parallel([
              Animated.timing(fadeInAnimated, {
                toValue: 1, // 1为不透明
                ...animationParam,
              }),
              Animated.timing(fadeX, {
                toValue: 0,
                ...animationParam,
              }),
            ]).start();
          }
        }}
        onScrollEndDrag={() => {
          debounce(() => {
            // console.log('onScrollEndDrag=====>', event);
            setHide(false);
            Animated.parallel([
              Animated.timing(fadeInAnimated, {
                toValue: 0, // 1为不透明
                ...animationParam,
              }),
              Animated.timing(fadeX, {
                toValue: 0,
                ...animationParam,
              }),
            ]).start();
          }, 1000);
        }}>
        {headers}
        <TabHeadView
          headLeft={tableHeadLeftComponents}
          tableHeadComponents={tableHeadComponents}
          headRef={scrollView1}
        />

        <View style={{flexDirection: 'row', width: '100%'}}>
          {
            // 左边悬浮部分的view
          }
          <View>
            {showDatas?.map((item, index) => {
              return renderRowSticky && renderRowSticky(item, index);
            })}
          </View>
          <ScrollView
            ref={scrollView2}
            overScrollMode={'never'}
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{flex: 1}}>
            <View>
              {showDatas?.map((item, index) => {
                return renderRow && renderRow(item, index);
              })}
            </View>
          </ScrollView>
        </View>
        {datas != null &&
          showDatas != null &&
          datas?.length != showDatas?.length && <Loading />}
      </ScrollView>
      {/* 回到顶部按钮 */}
      {showTop && (
        <ScrollTop
          title="顶部"
          fadeInAnimated={fadeInAnimated}
          fadeX={fadeX}
          handleScreen={() => {
            mainScrollRef?.current?.scrollTo({x: 0, y: 0, animated: true});
          }}
        />
      )}
    </View>
  );
};

export default TableView;

const TabHeadView: React.FC<{
  headLeft?: React.ReactElement;
  tableHeadComponents?: React.ReactElement;
  headRef?: React.LegacyRef<any> | undefined;
}> = ({headLeft, tableHeadComponents, headRef}) => {
  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
      {headLeft}
      <ScrollView
        ref={headRef}
        style={{flex: 1}}
        overScrollMode={'never'}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {tableHeadComponents}
      </ScrollView>
    </View>
  );
};
