import NumberInput from './xm-number-input';

/*
 * @Date: 2023-06-25 14:33:38
 * @LastEditors: PanMingJie
 * @LastEditTime: 2023-08-31 15:47:23
 * @Description:输入组件管理器,需要再使用的主页面构建这个管理器，然后在每个NumberInput和键盘中传入他
 */

export default class InputManger {
  inputs: Array<NumberInput> = [];
  focusInput?: NumberInput; //当前有焦点的view

  //添加view
  addView(view: NumberInput) {
    // console.log('----addView-----');

    this.inputs.push(view);
  }

  //移除组件
  removeView(view: NumberInput) {
    // console.log('----removeView-----');
    this.inputs.splice(this.inputs.indexOf(view), 1);
  }

  //删除数据
  delete() {
    if (!this.focusInput) {
      return;
    }

    if (!this.focusInput.getIsFocus() || !this.focusInput.getCanInput()) {
      return;
    }

    const text = this.focusInput.getValue() || '';
    if (text.length > 0) {
      this.focusInput.setValue(text.substring(0, text.length - 1));
    }
  }

  //清空数据
  clear() {
    if (!this.focusInput) {
      return;
    }

    if (!this.focusInput.getIsFocus() || !this.focusInput.getCanInput()) {
      return;
    }

    if (this.focusInput.getValue() != '') {
      this.focusInput.setValue('');
    }
  }

  //清楚组件所有焦点
  clearFoucs(useComponent: string) {
    this.inputs.forEach(item => {
      item.setSelect(false);
    });
  }

  //输入文本
  inputText(text: string) {
    if (!this.focusInput) {
      return;
    }

    if (!this.focusInput.getIsFocus() || !this.focusInput.getCanInput()) {
      return;
    }

    //有焦点有首次输入
    if (this.focusInput.getFocusFirstInput()) {
      this.focusInput.setValue(text);
      return;
    }

    // console.log('==inputText==',text);
    this.focusInput.setValue((this.focusInput.getValue() || '') + text);
  }

  setFocusView(view: NumberInput) {
    if (this.focusInput && this.focusInput != view) {
      this.focusInput.setSelect(false);
    }
    view.setSelect(true);
    this.focusInput = view;
  }

  //下一个view获取焦点
  toNextFocus() {
    console.log('----toNextFocus-----', this.inputs.length);

    //对inputs循环遍历

    //获取当前选中的是第几个组件
    const index = this.focusInput ? this.inputs.indexOf(this.focusInput) : -1;

    // 检查当前焦点是否在最后一个输入上
    if (this.inputs.length > 0 && index === this.inputs.length - 1) {
      // 将焦点重置到第一个输入
      this.inputs[this.inputs.length - 1].setSelect(false); // 取消选择最后一个输入
      this.focusInput = this.inputs[0]; // 将焦点设置为第一个输入
      this.focusInput.setSelect(true); // 选择第一个输入
    } else {
      for (let i = index + 1; i < this.inputs.length; i++) {
        console.log('----toNextFocus--for---', i);

        if (this.inputs[i].getCanInput()) {
          //将上一个选择的设置焦点不选中
          if (this.focusInput != this.inputs[i]) {
            this.focusInput?.setSelect(false);
          }
          this.focusInput = this.inputs[i];
          break;
        }
      }
      this.focusInput?.setSelect(true);
    }
  }
}
