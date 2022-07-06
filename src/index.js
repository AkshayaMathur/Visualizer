import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BaseView } from "./components";
import Splash from "./routes/Splash";
export default function Application() {
  return (
    <BaseView style={{ flex: 1 }}>
      <Splash />
    </BaseView>
  );
}
