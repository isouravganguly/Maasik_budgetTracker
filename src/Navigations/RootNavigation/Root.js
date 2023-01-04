import {useEffect, useState, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

import useAuth from '../../hooks/Auth/useAuth/index';
import AuthNavigation from '../Navigate/AuthNavigation';
import AppNavigation from '../Navigate/AppNavigation';
import {Controller} from '../../firebase/Controller';
import Userdetails from '../../screens/Userdetails';
import Loading from '../../components/Loading';
import {EmailContext} from '../../utils/Providers/EmailProvider';

const RootNavigation = () => {
  const {user} = useAuth();
  const email = useContext(EmailContext);

  // storing image at asyncStorage ---
  const storeEmail = async () => {
    try {
      await AsyncStorage.setItem('Email', user.email);
    } catch (e) {
      console.error('error at root, storing email -', e);
    }
  };

  useEffect(() => {
    if (user !== undefined) {

      email.EmailHandler(user.email);

      storeEmail();
    }
  }, [user]);

  //User navigates to userDetails or home page --

  return user === undefined ? (
    <AuthNavigation /> //SignIn or SignUp page
  ) : (
    <UserNavigation email={user.email} />
  );
};

const UserNavigation = ({email}) => {
  const [userdata, setUserdata] = useState(undefined);
  const [loading, setLoading] = useState(true);
  // add a firebase listener to user collection -> email data -> Snapshot

  try {
    useEffect(() => {
      setLoading(true);
      return firestore()
        .collection('Users')
        .doc(email)
        .onSnapshot(datas => {

          // when you get data in Snapshot, update the local isdata state
          const userdetails = datas.data();
          setUserdata(userdetails);
          setLoading(false);
        });
    }, []);
  } catch (error) {
    console.error('error on - Get user data at Root Navigation - ', error);
  }
  // This will rerender this component and return has -> userData? <userdata> : <appnav>
  return loading ? (
    <Loading />
  ) : userdata !== undefined ? (
    <AppNavigation />
  ) : (
    <Userdetails />
  );
};

export default RootNavigation;
