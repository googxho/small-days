/*
 * @Auther: xinhong.gong
 * @Date: 2023-11-19 21:50:57
 * @LastEditors: xinhong.gong xinhong.gong@guojutech.net
 * @LastEditTime: 2023-11-22 22:42:09
 * @FilePath: /small-days/src/commom/network.ts
 * @Description:
 */
import NetInfo from '@react-native-community/netinfo';

let networkState: 'Offline' | 'Wifi' | 'Cellular';

function getState() {
  return networkState;
}

const isOffline = () => networkState === 'Offline';

const isWifi = () => networkState === 'Wifi';

const isCellular = () => networkState === 'Cellular';

const mapState = (state: any) => {
  if (state.type === 'none') {
    networkState = 'Offline';
  } else if (state.type === 'wifi') {
    networkState = 'Wifi';
  } else {
    networkState = 'Cellular';
  }
};

async function setup() {
  try {
    const state = await NetInfo.fetch();
    mapState(state);
  } catch (e) {}

  NetInfo.addEventListener(state => {
    mapState(state);
  });
}

const Network = {
  setup,
  getState,
  isOffline,
  isWifi,
  isCellular,
};

export default Network;
