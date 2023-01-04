import {createNativeStackNavigator} from '@react-navigation/native-stack';

// --- Custom Components ----
import SignIn from '../../../screens/Authscreens/SignIn';
import SignUp from '../../../screens/Authscreens/SignUp';
import Userdetails from '../../../screens/Userdetails';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="UserDetails" component={Userdetails} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
