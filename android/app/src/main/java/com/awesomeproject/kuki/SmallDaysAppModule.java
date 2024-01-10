package com.awesomeproject.kuki;

import android.content.Intent;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.awesomeproject.utils.DeviceUtil;
import com.facebook.react.BuildConfig;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

public class SmallDaysAppModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    public SmallDaysAppModule() {
        super();
    }

    public SmallDaysAppModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "SmallDaysApp";
    }

    // 注册原生常量
    @Override
    public Map<String,Object> getConstants(){
        Map map = new HashMap<String,Object>();
        map.put("VersionName","ku-ki");
        map.put("VersionCode",BuildConfig.HERMES_BYTECODE_VERSION);
        return map;
    }

    // 打开相册
    @ReactMethod
    public void openGallery()  {
        /* 开启Pictures画面Type设定为image */
        Intent intent = new Intent();
        intent.setType("image/*");
        /* 使用Intent.ACTION_GET_CONTENT这个Action */
        intent.setAction(Intent.ACTION_GET_CONTENT);
        /* 取得相片后返回本画面 */
        getCurrentActivity().startActivityForResult(intent, 1);
    }
    // 获取版本
    @ReactMethod
    public void getVersionName(Promise promise) {
        int versionName = BuildConfig.HERMES_BYTECODE_VERSION;
        if(versionName == 0) {
            promise.reject(new Throwable("获取版本号失败"));
        } else {
        promise.resolve(String.valueOf(versionName));
        }
    }
}