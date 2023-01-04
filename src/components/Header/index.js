import {StyleSheet, Text, Switch, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import useTheme from '../../hooks/themes/useTheme';
import CustomButton from '../CustomButton';
import {SafeAreaView} from 'react-native';
import useAuth from '../../hooks/Auth/useAuth';
import {EmailContext} from '../../utils/Providers/EmailProvider';
// import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const Header = props => {
  // multiple rerenders of the header has to be removed !
  const style = useThemeStyles(styles);
  const theme = useTheme();
  // const userData = useContext(EmailContext);

  return (
    <SafeAreaView style={style.headerContainer}>
      {props.navigation.canGoBack() && (
        <CustomButton
          icon="arrow-left"
          shape="ROUND"
          type="GHOST"
          onpress={() => props.navigation.goBack()}
        />
      )}
      {/* <Text style={style.helloname}>Hi, {userData.name}</Text> */}
      <Text style={style.helloname}>Expensify</Text>

      <Switch onValueChange={theme.toggleTheme} value={theme.isLightTheme} />
      <CustomButton
        status="ABLE"
        type="GHOST"
        icon="bars"
        shape="ROUND"
        onpress={() => props.navigation.openDrawer()}
      />
    </SafeAreaView>
  );
};

export default Header;
