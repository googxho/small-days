import React from 'react';
import {Text, View} from 'react-native';
// import useAlbumDetail from './hooks/useAlbumMusicList';
// import {useParams} from '@/entry/router';
// import MusicSheetPage from '@/components/musicSheetPage';

export default function AlbumDetail() {
  // const {albumItem: originalAlbumItem} = useParams<'album-detail'>();
  // const [loadMore, albumItem, musicList, getAlbumDetail] =
  //     useAlbumDetail(originalAlbumItem);
  return (
    <View>
      <Text>1</Text>
    </View>
  );
  // return (
  //     <MusicSheetPage
  //         navTitle="专辑"
  //         sheetInfo={albumItem}
  //         loadMore={loadMore}
  //         musicList={musicList}
  //         onEndReached={() => {
  //             getAlbumDetail();
  //         }}
  //     />
  // );
}
