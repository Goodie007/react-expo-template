import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, SplashScreen } from "expo-router";

export default function RootLayout(){
    return (
        <SafeAreaProvider>
            <Slot />
        </SafeAreaProvider>
    )
}