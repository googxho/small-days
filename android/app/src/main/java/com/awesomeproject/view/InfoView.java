package com.awesomeproject.view;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;

import com.awesomeproject.R;

public class InfoView extends LinearLayout {
    public InfoView(Context context) {
        super(context);
        initView();
    }

    // 初始化视图的方法
    private void initView() {
        // 获取布局加载器，用于将XML布局文件转换为View对象
        LayoutInflater inflater = LayoutInflater.from(getContext());
        // 使用布局加载器将指定的XML布局文件(R.layout.layout_info_view)转换为View对象
        View view = inflater.inflate(R.layout.layout_info_view, null);
        // 创建布局参数，指定View的宽度和高度为MATCH_PARENT，即填满父容器
        LayoutParams lp = new LayoutParams(LayoutParams.MATCH_PARENT,LayoutParams.MATCH_PARENT);
        // 将初始化好的View添加到当前ViewGroup中，同时应用上述布局参数
        this.addView(view, lp);
    }

}
