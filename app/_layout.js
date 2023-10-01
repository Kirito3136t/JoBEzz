import React, { useCallback } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const onLayoutRootView = useCallback(() => {
    // Your code for the onLayoutRootView function
    // For example, you can log a message when the layout occurs.
    console.log('Layout occurred');
  }, []);

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
