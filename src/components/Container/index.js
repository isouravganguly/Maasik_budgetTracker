import {View} from 'react-native';
import React from 'react';

import useThemeStyles from '../../hooks/themes/useThemeStyles';
import styles from './styles';

const Container = props => {
  const style = useThemeStyles(styles);
  return <View style={[style.container, props.style]}>{props.children}</View>;
};

export default Container;
