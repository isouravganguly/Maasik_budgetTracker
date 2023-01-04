import AsyncStorage from '@react-native-async-storage/async-storage';

const userDetailsProvider = async () => {
  const userDetails = await AsyncStorage.getItem('userDetails');
  console.log("userdetails", userDetails)

  return userDetails !== null ? JSON.parse(userDetails) : null;
};

export default userDetailsProvider;
