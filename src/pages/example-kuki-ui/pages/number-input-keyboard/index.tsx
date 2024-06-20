import InputManger from '@/component/rn-kuki-ui/NumberInputKeyboard/input-manger';
import NumberInput from '@/component/rn-kuki-ui/NumberInputKeyboard/xm-number-input';
import XmNumberKeyboard, {
  NoClick,
} from '@/component/rn-kuki-ui/NumberInputKeyboard/xm-number-keyboard';
import {useState} from 'react';
import {View, ScrollView} from 'react-native';

const NumberInputKeyBoard = () => {
  const [numValue, setNumValue] = useState('');
  const [inputManger] = useState(new InputManger());
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <NumberInput
          // value={numValue}
          onValueChange={text => {
            // setNumValue(text)
            // xmToast.tip(text)
          }}
          style={{margin: 0}}
          inputManger={inputManger}
        />
        <NumberInput
          // value={numValue}
          canInput={false}
          onValueChange={text => {
            // setNumValue(text)
            // xmToast.tip(text)
          }}
          style={{margin: 0}}
          inputManger={inputManger}
        />
        <NumberInput
          // value={numValue}
          onValueChange={text => {
            // setNumValue(text)
            // xmToast.tip(text)
          }}
          style={{margin: 0}}
          inputManger={inputManger}
        />
        <NumberInput
          value={numValue}
          onValueChange={text => {
            setNumValue(text);
            // xmToast.tip(text)
          }}
          style={{margin: 0}}
          inputManger={inputManger}
        />
      </ScrollView>
      <XmNumberKeyboard
        inputManger={inputManger}
        isShowNext
        isShowClear
        onCredit={new NoClick()}
        onMiddleCash={() => {}}
      />
    </View>
  );
};

export default NumberInputKeyBoard;
