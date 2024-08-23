import React, {useEffect, useState} from 'react';
import {FlatList, Platform, Text, View} from 'react-native';
import * as Printer from '@xm-private/react-native-printer';
import {BluetoothDevice, DEVICE_TYPE} from '@xm-private/react-native-printer';
import {Button} from '@/component/rn-kuki-ui';
import {useNavigation} from '@react-navigation/native';
import {INavigateProps} from '../welcome';
const isAndroid = Platform.OS === 'android'; // 判断是否为安卓
const isIOS = Platform.OS === 'ios'; // 判断是否为iOS

const PrintTableScreen = () => {
  const navigation = useNavigation<INavigateProps['navigation']>();
  const [bluetoothList, setBluetooth] = useState<Array<BluetoothDevice>>([]);
  // 已连接打印机
  const [currentBluetoothDevice, setCurrentBluetoothDevice] =
    useState<BluetoothDevice | null>(null);

  const getBluetoothList = async () => {
    try {
      if (isAndroid) {
        await Printer.isBluetoothEnabled();
        const androidList = await Printer.enableBluetooth({
          deviceType: DEVICE_TYPE.IMAGING,
        });
        console.log('🚀 ~ getBluetoothList ~ androidList:', androidList);
        Printer.scanDevices({
          deviceType: DEVICE_TYPE.IMAGING,
        });
        setBluetooth(androidList);
      } else {
        // 苹果
        await Printer.isBluetoothEnabled();
        Printer.scanDevices({
          deviceType: DEVICE_TYPE.IMAGING,
        });
      }
    } catch (err) {
      console.log('🚀 ~ getBluetoothList ~ err:', err);
      // xmToast.tip(`获取蓝牙列表失败`);
    }
  };

  const connectBluetoothPrinter = (device: BluetoothDevice) => async () => {
    try {
      await Printer.isBluetoothEnabled();
      await Printer.enableBluetooth();
      await Printer.connect(device.address);
      setCurrentBluetoothDevice(device);
      console.log('🚀 ~ connectBluetoothPrinter ~ result:', 'true');
    } catch (err) {
      console.log('🚀 ~ returnnewPromise ~ err:', err);
    }

    // return new Promise((resolve, reject) => {
    //     Printer.isBluetoothEnabled()
    //       .then(() => {
    //         Printer.enableBluetooth()
    //           .then(() => {
    //             Printer.connect(device.address)
    //               .then(res => {
    //                 setCurrentBluetoothDevice(device);
    //                 resolve(res);
    //                 console.log('🚀 ~ .then ~ res:连接成功', res);
    //               })
    //               .catch(error => {
    //                 reject(error);
    //                 setCurrentBluetoothDevice(null);
    //               });
    //           })
    //           .catch(error => {
    //             reject(error);
    //             setCurrentBluetoothDevice(null);
    //           });
    //       })
    //       .catch(error => {
    //         reject(error);
    //         setCurrentBluetoothDevice(null);
    //       });

    // });
  };

  useEffect(() => {
    getBluetoothList();
    Printer.onEventDeviceFound(device => {
      console.log('🚀 ~ useEffect ~ device:', device);

      if (isAndroid) {
        // const old = bluetoothList.push(device);
        // setBluetooth([device]);
      } else {
      }
    });

    return () => {
      Printer.stopScanDevices();
    };
  }, []);

  useEffect(() => {
    console.log(
      '🚀 ~ PrintTableScreen ~ currentBluetoothDevice:',
      JSON.stringify(currentBluetoothDevice, null, 2),
    );
  }, [currentBluetoothDevice]);

  return (
    <View>
      <Text>蓝牙列表</Text>
      <Button onPress={getBluetoothList}>获取</Button>
      <FlatList
        data={bluetoothList}
        renderItem={item => (
          <View
            style={{flexDirection: 'row', alignItems: 'center'}}
            key={`${JSON.stringify(item)}`}>
            <Button
              onPress={() =>
                navigation.navigate('SimplePrint', {printer: item.item})
              }>
              <Text>{`${JSON.stringify(item.item.name)}`}</Text>
            </Button>
            <Button onPress={connectBluetoothPrinter(item.item)}>
              {currentBluetoothDevice?.address == item.item.address
                ? '已连接'
                : '连接'}
            </Button>
          </View>
        )}
      />
    </View>
  );
};

export default PrintTableScreen;
