import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useThemeStyles from '../../../hooks/themes/useThemeStyles';

import styles from './styles';
import CustomButton from '../../../components/CustomButton';

const SignUp = ({navigation}) => {
  const style = useThemeStyles(styles);
  const [authData, changeAuthData] = useState({
    email: '',
    password: '',
    error: '',
  });

  const signUpHandler = async () => {
    if (authData.email === '' || authData.password === '') {
      changeAuthData({
        ...authData,
        error: 'Email and Password is Mandatory',
      });
      alert('Email and Password is Mandatory');
    } else {
      try {
        await AsyncStorage.removeItem('Email');
        await AsyncStorage.removeItem('userDetails');

        await auth().createUserWithEmailAndPassword(
          authData.email,
          authData.password,
        );
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        if (error.code === 'auth/weak-password') {
          console.log('That email address is invalid!');
        }

        if (error.code === 'auth/invalid-phone-number') {
          console.log('That email address is invalid!');
        }

        if (error.code === 'auth/network-request-failed') {
          console.log('That email address is invalid!');
        }

        if (error.code === 'auth/invalid-password') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      }
    }
  };

  return (
    <View style={style.container}>
      <Text style={style.LoginText}>MAASIK</Text>
      <TextInput
        style={style.inputBox}
        value={authData.email}
        onChangeText={text => changeAuthData({...authData, email: text})}
        autoCapitalize={false}
        autoCorrect={false}
        placeholder="Email"
      />
      <TextInput
        style={style.inputBox}
        onChangeText={text => changeAuthData({...authData, password: text})}
        secureTextEntry={true}
        placeholder="Password"
      />

      <View style={style.AuthButtons}>
        <CustomButton
          text="Sign Up"
          icon="rocket"
          shape="WIDE"
          type="FILLED"
          status="ABLE"
          onpress={() => signUpHandler()}
        />

        <CustomButton
          shape="WIDE"
          status="ABLE"
          onpress={() => navigation.navigate('SignIn')}>
          <Text>Already have an account?</Text>
          <Text style={style.signInText}>Sign In</Text>
        </CustomButton>
      </View>
    </View>
  );
};

export default SignUp;
