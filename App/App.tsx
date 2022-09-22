import React, {useEffect} from 'react';
import AppNavigation from './Navigations';
import {Provider} from 'react-redux';
import store from './Store/store';
import DeviceInfo from 'react-native-device-info';
import {Alert} from 'react-native';

const isSimulator = async () => {
  const value = await DeviceInfo.isEmulator();
  if (value) {
    Alert.alert('running on simulator');
  }
};
const App = () => {
  useEffect(() => {
    isSimulator();
  }, []);
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;

