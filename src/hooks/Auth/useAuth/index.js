import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    return auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return {
    user,
  };
};

export default useAuth;
