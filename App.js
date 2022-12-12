import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {persistor, store} from './src/Redux/Store';
import ThemeProvider from './src/themes/ThemeProvider';
// import Hometest from './src/screens/Tests/Hometest'
import RootNavigation from './src/Navigations/RootNavigation/Root';

const App = () => {
  return(
    <>
   {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        <ThemeProvider>
          <RootNavigation />
          {/* <Userdetails /> */}
          {/* <Hometest /> */}
        </ThemeProvider>
      </NavigationContainer>
      
      
      {/* </PersistGate> */}
     {/* </Provider> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
