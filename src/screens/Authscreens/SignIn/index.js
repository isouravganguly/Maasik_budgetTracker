import {
  Button,
//   ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

// import Error from '../../components/notifications/errors';

const SignIn = ({navigation}) => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    showSignUp: false,
    forgotPas: false,
  });

  const showSignUp = () => {
    return (
      <View
        style={{
          backgroundColor: 'yellow',
          height: '5%',
          width: '60%',
          borderRadius: 10,
        }}>
        { (
          <Button
            onPress={() => navigation.navigate('SignUp')}
            title="signUp?"
          />
        )}
        {value.forgotPas && (
          <Button
            onPress={() => navigation.navigate('SignUp')}
            title="forgot Password?"
          />
        )}
      </View>
    );
  };

  const signInHandler = async () => {
    if (value.email === '' || value.password === '') {
      alert('email and Password are Mandatory');
    } else {
      auth()
        .signInWithEmailAndPassword(value.email, value.password)
        .then(() => {
          console.log('User account signed in!');
          const user = auth().currentUser;
          console.log(user);
        })
        .catch(error => {
          if (error.code === 'auth/user-not-found') {
            setValue({...value, showSignUp: true});
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            setValue({...value, showSignUp: true});
          }

          if (error.code === 'auth/wrong-password') {
            console.log('wrong password');
            setValue({...value, forgotPas: true});
          }
          console.error(error);
        });
    }
  };

  return (
    <View
    //   source={require('../../../assets/images/appBackground.png')}
    //   resizeMethod="cover"
      style={styles.loginBackground}>
      <Text style={styles.LoginText}>MAASIK</Text>

      <View style={styles.container}>
        <TextInput
          style={[styles.inputBox, styles.shadow]}
          value={value.email}
          onChangeText={text => setValue({...value, email: text})}
          placeholder="email"
          autoCapitalize={false}
          autoCorrect={false}
        />
        <TextInput
          style={[styles.inputBox, styles.shadow]}
          onChangeText={p => setValue({...value, password: p})}
          secureTextEntry={true}
          placeholder="Password"
        />

        <TouchableOpacity onPress={() => signInHandler()} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {showSignUp()}
      {/* {value.forgotPas && showSignUp() */}
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginBackground: {
    flex: 1,
    alignItems: 'center',
  },

  LoginText: {
    position: 'absolute',
    top: 200,
    fontSize: 50,
    fontWeight: '700',
    marginBottom: 50,
  },

  inputBox: {
    backgroundColor: 'white',
    borderRadius: 20,
    minWidth: '60%',
    padding: 8,
    margin: 8,
    height: 40,
    fontSize: 25,
    height: 50,
    paddingLeft: 15,
  },

  shadow: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 3,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '60%',
    borderRadius: 20,
    backgroundColor: 'green',
    height: 50,

    margin: 10,
    padding: 8,
  },

  buttonText: {
    fontWeight: '500',
    color: 'white',
    fontSize: 20,
  },
});
