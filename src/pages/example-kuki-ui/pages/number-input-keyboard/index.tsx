import InputManger from '@/component/rn-kuki-ui/NumberInputKeyboard/input-manger';
import NumberInput from '@/component/rn-kuki-ui/NumberInputKeyboard/xm-number-input';
import XmNumberKeyboard, {
  NoClick,
} from '@/component/rn-kuki-ui/NumberInputKeyboard/xm-number-keyboard';
import {useState} from 'react';
import {View} from 'react-native';

const NumberInputKeyBoard = () => {
  const [numValue, setNumValue] = useState('');
  const [inputManger] = useState(new InputManger());
  return (
    <View>
      <NumberInput
        // value={numValue}
        canInput={false}
        onValueChange={text => {
          // setNumValue(text)
          // xmToast.tip(text)
        }}
        style={{margin: 24}}
        inputManger={inputManger}
      />
      <NumberInput
        // value={numValue}
        onValueChange={text => {
          // setNumValue(text)
          // xmToast.tip(text)
        }}
        style={{margin: 24}}
        inputManger={inputManger}
      />
      <NumberInput
        // value={numValue}
        onValueChange={text => {
          // setNumValue(text)
          // xmToast.tip(text)
        }}
        style={{margin: 24}}
        inputManger={inputManger}
      />
      <NumberInput
        value={numValue}
        onValueChange={text => {
          setNumValue(text);
          // xmToast.tip(text)
        }}
        style={{margin: 24}}
        inputManger={inputManger}
      />
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
