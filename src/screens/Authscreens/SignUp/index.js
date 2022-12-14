import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
 
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
        await auth().createUserWithEmailAndPassword(authData.email, authData.password);
        // navigation.navigate("UserDetails", {
        //   email: authData.email,
        // })
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
}

return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SignUp</Text>
      <TextInput
        style={styles.inputBox}
        value={authData.email}
        onChangeText={text => changeAuthData({...authData, email: text})}
        autoCapitalize = {false}
        autoCorrect ={false}
        placeholder = "Email"
      />
      <TextInput
        style= {styles.inputBox}
        onChangeText={text => changeAuthData({...authData, password: text})}
        secureTextEntry={true}
        placeholder = 'Password'
      />

      <TouchableOpacity
        style={{backgroundColor: 'green', padding: 20, width: '60%'}}
        onPress={() => signUpHandler()}>
        <Text>SignUp</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp;

const styles = StyleSheet.create({
  inputBox: {
          backgroundColor: '#e6e6e6',
          height: 30,
          borderRadius: 10,
          padding: 10,
          margin: 10,
          width: '60%',
  }
});
