import {View, Text} from 'react-native';
import React, {useEffect, useRef} from 'react';
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSpring,
} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../CustomButton';

const ErrorBox = ({message, setMessage}) => {
  const style = useThemeStyles(styles);
  const progress = useSharedValue(-20);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      top: progress.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withSpring(0);
  }, []);

  setTimeout(() => {
    setMessage(null);
  }, 3000);
  return (
    <SafeAreaView style={{position: 'absolute', width: '100%'}}>
      <Animated.View style={[style.errorbox, animatedStyle]}>
        <Text style={style.errorboxText}>{message}</Text>
        <CustomButton
          type="GHOST"
          status="ABLE"
          shape="ROUND"
          icon="remove"
          onpress={() => setMessage(null)}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default ErrorBox;
