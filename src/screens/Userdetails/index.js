import {
  ActivityIndicator,
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useRef, useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// -- Custom Component ----
import CreateForm from '../../components/createForm';
import CustomButton from '../../components/CustomButton';
import useCreateUser from '../../hooks/useCreateUser';
import ImageArea from '../../components/ImageArea';
import {imageHandler} from '../../../assets/images/imageHandler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EmailContext} from '../../utils/Providers/EmailProvider';

const Userdetails = ({navigation}) => {
  const [loading, setLoading] = useState(false); // loading state
  const userData = useContext(EmailContext);

  const email = userData.email;

  //  ----------------Labels Array to create the form ------------
  const labels = useRef([
    {
      label: 'Name',
      type: 'String',
      data: '',
    },
    {
      label: 'Phone',
      type: 'numeric',
      data: null,
    },
    {
      label: 'Age',
      type: 'numeric',
      data: null,
    },
  ]).current;

  // -- [Object]-Variable to store the FORM data ---

  // ----- Creates the user with given data ----
  const createUser = () => {
    if (
      labels[0].data !== null &&
      labels[1].data !== null &&
      labels[2].data !== null
    ) {
      setLoading(true);
      console.log('createUser');

      const inputs = {
        Name: labels[0].data,
        Phone: labels[1].data,
        Age: labels[2].data,
      };

      // hook to create user
      const done = useCreateUser(inputs, email);
      console.log("input.Name -- ", inputs.Name)
      userData.nameHandler(inputs.Name);
      console.log('userdata at userdetails --', userData);

      if (!done) {
        alert('Had an error creating user');
      } else {
        // navigation.navigate('Home');
      }

      setLoading(false);
    } else {
      console.log('Fill all fields!');
    }
  };

  const FormHandler = () => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <CreateForm labels={labels} />
        <CustomButton
          status="ABLE"
          type="FILLED"
          icon="arrow-right"
          text="Add Me!"
          shape="WIDE"
          onpress={() => createUser()} // a function to call [useCreateUser] Hook, error if user not created
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageArea URI="enterData" />

      {loading ? <ActivityIndicator size="large" /> : <FormHandler />}
    </SafeAreaView>
  );
};

export default Userdetails;
