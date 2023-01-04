import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import UserDetails from '../../../screens/Userdetails';
import Dashboard from '../../../screens/Dashboard';
import Details from '../../../screens/Details';
import useUserDetailsProvider from '../../../hooks/useUserDetailsProvider';
import Settings from '../../../screens/Settings';
import Header from '../../../components/Header';
import useTheme from '../../../hooks/themes/useTheme';

import {firebase} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// const BaseNavigation = createNativeStackNavigator();

// const AppNavigation = () => {
//   const userData = async () => {
//     // check here if user data is present in firestore
//     // const res = await firebase;
//     // return res;
//   };
//   return (
//     <BaseNavigation.Navigator screenOptions={{headerShown: false}}>
//       <BaseNavigation.Screen name="Home" component={Drawer} />
//     </BaseNavigation.Navigator>

//     // showDetailPage? <AppScreen /> : <UserDetails email={email} setShowDetailPage={set}
//   );
// };

const DrawerNavigation = createDrawerNavigator();
const AppNavigation = () => {
  const theme = useTheme();

  return (
    <DrawerNavigation.Navigator
      initialRouteName="Home"
      drawerPosition="Right" // Drawer should supposedly open from Right!
      screenOptions={{headerShown: false}}>
      <DrawerNavigation.Screen name="Home" component={Home} />
      <DrawerNavigation.Screen name="SignOut" component={SignOut} />
      {/* <DrawerNavigation.Screen name="Profile" component={Profile} />
      <DrawerNavigation.Screen name="Setting" component={Setting} /> */}
    </DrawerNavigation.Navigator>
  );
};

const SignOut = () => {
  // signout for now ...
  auth().signOut();
};

const HomeNavigation = createNativeStackNavigator();
const Home = () => {
  return (
    <HomeNavigation.Navigator
      screenOptions={{
        header: props => <Header {...props} />,
        headerBackVisible: false,
      }}>
      <HomeNavigation.Screen name="Dashboard" component={Dashboard} />
      <HomeNavigation.Screen name="Details" component={Details} />
    </HomeNavigation.Navigator>
  );
};

export default AppNavigation;
