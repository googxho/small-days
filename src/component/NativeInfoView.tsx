import React from "react"
import { View, ViewProps, requireNativeComponent } from "react-native"

type NativeInfoViewType = ViewProps | {}

const NativeInfoView = requireNativeComponent<NativeInfoViewType>("NativeInfoView")

export default () => {
  return (
    <NativeInfoView />
  )
}


