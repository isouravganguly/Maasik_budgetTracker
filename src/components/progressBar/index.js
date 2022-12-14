// --- Third Party Libraries ----
import {View, Animated} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';

//  -- Custom Components ----
import styles from './styles';
import useThemeStyles from '../../hooks/themes/useThemeStyles';

const ProgressBar = ({percent, width}) => {

  const animatedValue = useRef(new Animated.Value(-1000)).current;

  const style = useThemeStyles(styles);

  const progressBarChange = () => {
    Animated.spring(animatedValue, {
      toValue: (width * (percent / 100)) - width,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    progressBarChange();
  }, [percent, width]);

  return (
      <View style={[style.progressBar]}>
        <Animated.View
          style={[
            style.realProgress(width),
            {transform: [{translateX: animatedValue}]},
          ]}
        />
      </View>

  );
};

export default ProgressBar;
