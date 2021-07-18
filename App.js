/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {store, persistor} from './src/redux/configureStore';
import { NavigationContainer } from '@react-navigation/native';
import TabBarControl from './src/screen/Navigation/TabBarController'
import {Provider} from 'react-redux';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <Provider store={store}>
       <NavigationContainer>
            <TabBarControl />
         </NavigationContainer>
    </Provider>  
  );
};

export default App;
