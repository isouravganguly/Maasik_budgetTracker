import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './src/Redux/Store';
import ThemeProvider from './src/themes/ThemeProvider';
// import Hometest from './src/screens/Tests/Hometest'
import RootNavigation from './src/Navigations/RootNavigation/Root';
import ProgressBar from './src/components/progressBar';
import AppScreen from './src/screens/AppScreen';
import Card from './src/components/Card';
import Header from './src/components/Header';

const App = () => {
  return(
    <>
   {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        <ThemeProvider>
          {/* <RootNavigation /> */}
          {/* <ProgressBar /> */}
          {/* <Card /> */}
          <Header />
          <AppScreen />
        </ThemeProvider>
      </NavigationContainer>
      
      
      {/* </PersistGate> */}
     {/* </Provider> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
