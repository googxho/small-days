package com.awesomeproject.view;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.RoundedCorner;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.awesomeproject.R;
import com.bumptech.glide.Glide;
import com.bumptech.glide.load.resource.bitmap.CircleCrop;
import com.bumptech.glide.load.resource.bitmap.RoundedCorners;
import com.bumptech.glide.request.RequestOptions;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class InfoView extends LinearLayout implements View.OnClickListener {

    // 获取图片控件
    ImageView avatarImg;
    TextView nameText;
    TextView descText;
    Button btnView;
    // 圆形 circle 方形 round
    String shape;
    // 图像地址
    String url;

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

        avatarImg = view.findViewById(R.id.img_ku_ki);
        nameText = view.findViewById(R.id.text_view2);
        descText = view.findViewById(R.id.text_view3);
        btnView = view.findViewById(R.id.button3);
        btnView.setOnClickListener(this);

        // 创建布局参数，指定View的宽度和高度为MATCH_PARENT，即填满父容器
        LayoutParams lp = new LayoutParams(LayoutParams.MATCH_PARENT,LayoutParams.MATCH_PARENT);
        // 将初始化好的View添加到当前ViewGroup中，同时应用上述布局参数
        this.addView(view, lp);
    }

    // 监听到点击事件触发后调用此方法
    @Override
    public void onClick(View view) {
        Boolean curShape = this.shape == "circle";
        if(curShape) {
            this.shape = "round";
        } else  {
            this.shape = "circle";
        }
        // 使用 Glide 加载头像图片并设置到 ImageView 中
        Glide.with(this)
                .load(this.url)
                .apply(RequestOptions.bitmapTransform(
                        curShape ? new CircleCrop() : new RoundedCorners(30)
                ))
                .into(avatarImg);
        // JS 事件回调
        // 创建一个可写的事件参数映射
        WritableMap eventParams = Arguments.createMap();
        eventParams.putString("shape",curShape ? "circle" : "round");
        // 获取当前视图的 ReactContext
        ReactContext context = (ReactContext) getContext();
        // 通过 ReactContext 获取 RCTEventEmitter 模块并使用 receiveEvent 方法发送事件
        context.getJSModule(RCTEventEmitter.class).receiveEvent(getId(), "onShapeChange", eventParams);
    }

    // 设置头像
    public void setAvatar(String url) {
        this.url = url;
        // 使用 Glide 加载头像图片并设置到 ImageView 中
        Glide.with(this)
                .load(url)
                .into(avatarImg);
    }
    // 设置详情
    public void setDescText(String desc) {
        descText.setText(desc);
    }

}
