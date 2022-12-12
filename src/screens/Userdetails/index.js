import {ActivityIndicator, View} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';

// -- Custom Component ----
import CreateForm from '../../components/createForm';
import CustomButton from '../../components/CustomButton';
import useCreateUser from '../../hooks/useCreateUser';

const Userdetails = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);

  //  ----------------Labels Array to create the form ------------
  const labels = [
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
  ];

  // ---- Get the user data (once)  ----------
  useEffect(() => {
    userDetails();
  }, []);

  // --- The data to store in databse ----
  const inputFields = useRef({
    Name: '',
    Age: null,
    Phone: '',
  }).current;

  const userDetails = () => {
    firestore()
      .collection('Users')
      .doc(route?.email)
      .get()
      .then(data => {
        if (data.data() !== undefined) {
          navigation.navigator('App');
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // ----- Creates the user with given data ----
  const createUser = () => {
    const done = useCreateUser(inputFields);
    if (!done) {
      alert('Had an error creating user');
    } else {
      navigation.navigate('App');
    }
  };

  const FormHandler = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CreateForm labels={labels} fields={inputFields} />
        <CustomButton
          status="ABLE"
          type="FILLED"
          icon="arrow-right"
          text="Add Me!"
          onpress={() => createUser()} // calls Hook, error if user not created
        />
      </View>
    );
  };

  return (loading ? <ActivityIndicator size="large" /> : <FormHandler />)
};

export default Userdetails;
