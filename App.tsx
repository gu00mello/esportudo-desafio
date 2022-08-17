import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Router } from './src/routes/Router';

import Provider from './src/context';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#181829'
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Provider>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
