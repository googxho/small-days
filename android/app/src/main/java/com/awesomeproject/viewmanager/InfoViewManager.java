package com.awesomeproject.viewmanager;

import android.view.View;

import androidx.annotation.NonNull;

import com.awesomeproject.view.InfoView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class InfoViewManager extends SimpleViewManager<InfoView> {
    @NonNull
    @Override
    public String getName() {
        return "NativeInfoView";
    }

    @NonNull
    @Override
    protected InfoView createViewInstance(@NonNull ThemedReactContext themedReactContext) {
        // 返回 InfoView 的实例
        return new InfoView(themedReactContext);
    }
}
