import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

// --- To implement redux persist ---
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {persistor, store} from './src/Redux/Store';

import ThemeProvider from './src/themes/ThemeProvider';
import EmailProvider from './src/utils/Providers/EmailProvider';
import RootNavigation from './src/Navigations/RootNavigation/Root';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <>
      {/* <Provider store={store}> */}
      {/* <PersistGate loading={null} persistor={persistor}> */}

      <NavigationContainer>
        <EmailProvider>
          <ThemeProvider>
            <RootNavigation />
          </ThemeProvider>
        </EmailProvider>
      </NavigationContainer>

      {/* </PersistGate> */}
      {/* </Provider> */}
    </>
  );
};

export default App;
