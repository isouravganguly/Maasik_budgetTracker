import {Text, TextInput, View} from 'react-native';
import React, {useState, useRef} from 'react';
import auth from '@react-native-firebase/auth';
import useThemeStyles from '../../../hooks/themes/useThemeStyles';

import styles from './styles';
import CustomButton from '../../../components/CustomButton';
import ErrorBox from '../../../components/ErrorBox';
import {SafeAreaView} from 'react-native-safe-area-context';

// import Error from '../../components/notifications/errors';

const SignIn = ({navigation}) => {
  const style = useThemeStyles(styles);
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState(null);

  const signInHandler = async () => {
    if (value.email === '' || value.password === '') {
      alert('email and Password are Mandatory');
    } else {
      auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(() => {
          console.log('User account signed in!');
          const user = auth().currentUser;
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            setMessage('User could not be found');
          }

          if (error.code === 'auth/invalid-email') {
            console.error('That email address is invalid!');
            setMessage('That email address is invalid!');
          }

          if (error.code === 'auth/wrong-password') {
            console.error('wrong password');
            setMessage('wrong password');
          }
          console.error(error);
        });
    }
  };

  return (
    <>
      {message !== null && (
          <ErrorBox message={message}  setMessage = {setMessage} />
      )}
      <View style={style.loginBackground}>
        <Text style={style.LoginText}>MAASIK</Text>

        <View style={style.container}>
          <TextInput
            style={[style.inputBox, style.shadow]}
            value={value.email}
            onChangeText={text => setValue({...value, email: text})}
            placeholder="Email"
            autoCapitalize={false}
            autoCorrect={false}
          />
          <TextInput
            style={[style.inputBox, style.shadow]}
            onChangeText={p => setValue({...value, password: p})}
            secureTextEntry={true}
            placeholder="Password"
          />

          <View style={style.AuthButtons}>
            <CustomButton
              text="LOGIN"
              icon="arrow-right"
              shape="WIDE"
              status="ABLE"
              type="FILLED"
              onpress={() => signInHandler()}
            />
            <CustomButton
              shape="WIDE"
              status="ABLE"
              onpress={() => navigation.navigate('SignUp')}>
              <Text>register now,</Text>
              <Text style={style.signUpText}>Sign Up?</Text>
            </CustomButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignIn;
