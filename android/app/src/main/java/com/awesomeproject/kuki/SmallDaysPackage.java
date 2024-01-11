package com.awesomeproject.kuki;

import androidx.annotation.NonNull;

import com.awesomeproject.viewmanager.InfoViewManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.List;

public class SmallDaysPackage implements ReactPackage {
    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactApplicationContext) {
        List<NativeModule> modules = new ArrayList<>();
        // 添加自定义的 NativeModule
        modules.add(new SmallDaysAppModule(reactApplicationContext));
        return modules;
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactApplicationContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        // 添加注册自定义的 ViewManager
        viewManagers.add(new InfoViewManager());
        return viewManagers;
    }
}
