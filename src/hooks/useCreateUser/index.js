import firestore from '@react-native-firebase/firestore';
import { useRef } from 'react';

const useCreateUser = async (newUser, email) => {
  // If I use Persist
  // const {email} = useSelector(state => state.email);

  try {
    await firestore()
      .collection('Users')
      .doc(email)
      .set(newUser)

  } catch (error) {
    console.error(error);
    return false
  }

  return true;
};

export default useCreateUser;
