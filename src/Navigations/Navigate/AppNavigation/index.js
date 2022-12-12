import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import UserDetails from '../../../screens/Userdetails';
import AppScreen from '../../../screens/AppScreen';

const direct = createNativeStackNavigator();
const AppNavigation = ({email}) => {
  return (
    <direct.Navigator>
      <direct.Screen name="userDetails" component={UserDetails} initialParams={{email: email}}/>
      <direct.Screen name="App" component={AppScreen} />
    </direct.Navigator>

    // showDetailPage? <AppScreen /> : <UserDetails email={email} setShowDetailPage={set}
  );
};

export default AppNavigation;
