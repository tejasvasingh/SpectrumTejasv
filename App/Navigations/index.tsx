import React from 'react';
import HomeScreen from '../Screens/Welcome';
import {NavigationContainer} from '@react-navigation/native';
import Buttons from '../Screens/Buttons';
import Main from '../Screens/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../Constant/ScreenName';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenName.welcome}>
        <Stack.Screen name={ScreenName.welcome} component={HomeScreen} />
        <Stack.Screen name={ScreenName.buttons} component={Buttons} />
        <Stack.Screen name={ScreenName.main} component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
