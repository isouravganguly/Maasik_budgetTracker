import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// custom components -----------
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import styles from './styles';

const CustomButton = (props) => {

    const style = useThemeStyles(styles);

  const statusHandle = status => {
    switch (status) {
      case 'DISABLE':
        return style.disable;
      case 'ABLE':
        return styles.able;
    }
  };

  const typeHandle = type => {
    switch (type) {
      case 'FILLED':
        return style.fill;
      case 'OUTLINE':
        return style.outline;
      case 'GHOST':
        return style.ghost;
    }
  };

  const statusStyle = statusHandle(props.status);
  const typeStyle = typeHandle(props.type);

  return (
    <TouchableOpacity
      style={[style.button, statusStyle, typeStyle, props.style]}
      onPress={() => props.onpress()}
    >
      <Text>{props.text}</Text>
      {props.icon && <Icon name={props.icon} size={30} color="#fafafa" />}
    </TouchableOpacity>
  );
};

export default CustomButton;
