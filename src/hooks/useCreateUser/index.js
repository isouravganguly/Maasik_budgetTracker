import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCreateUser = async (inputs, email) => {
  try {
    console.log("in user", email)
    await firestore().collection('Users').doc(email).set({details: inputs});

  } catch (error) {
    console.error("this is the error", error);
    return false;
  }
  AsyncStorage.setItem('userDetails', JSON.stringify(inputs));

  return true;
};

export default useCreateUser;
