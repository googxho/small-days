package com.awesomeproject.viewmanager;

import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.awesomeproject.view.InfoView;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

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
    @ReactProp(name = "avatar")
    public void setAvatar(InfoView view, String url){
        view.setAvatar(url);
    }
    @ReactProp(name = "desc")
    public void setDescText(InfoView view, String desc){
        view.setDescText(desc);
    }


    @Nullable
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
            .put("onShapeChange",
                    MapBuilder.of("phasedRegistrationNames",
                            MapBuilder.of("bubbled", "onShapeChange")
                    )
            )
            // to-do 继续 put
            .build();
    }
}
