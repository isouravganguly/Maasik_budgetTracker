// --- Third Party Libraries ----
import {View} from 'react-native';
import React, {useEffect} from 'react';

//  -- Custom Components ----
import styles from './styles';
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const ProgressBar = ({percent, width}) => {
  const style = useThemeStyles(styles);

  const progress = useSharedValue(0);

  const animateProgress = useAnimatedStyle(() => {
    return {
      width: progress.value + '%',
    };
  });

  useEffect(() => {
    progress.value = withSpring(percent);
  }, [percent, width]);

  // width * (percent / 100) - width,

  return (
    <View style={[style.progressBar]}>
      <Animated.View style={[style.realProgress, animateProgress]} />
    </View>
  );
};

export default ProgressBar;
