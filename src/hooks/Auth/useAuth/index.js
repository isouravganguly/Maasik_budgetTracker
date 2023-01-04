import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {Controller} from "../../../firebase/Controller"

const useAuth = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    return auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
        console.log("user", user.email)
      } else {
        setUser(undefined);
      }
    });
  }, []);

  useEffect(() => {
    if (user !== undefined) {
      const userData = Controller.getUserData(user.email);

      if(userData === undefined){
        
      }
    }
  }, [user]);

  return {
    user,
  };
};

export default useAuth;
