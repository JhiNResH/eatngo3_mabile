import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { fetchYelpData } from './yelp_api'; // 导入 YelpAPI.js 中的函数

import Map from './components/Map/Map';
import Toolbar from './components/ToolBar/ToolBar';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <SafeAreaView>
      <Toolbar />
      <Map />
      <WalletConnect />
      <yelp_api />
    </SafeAreaView>
  );
}

