import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// custom components -----------
import useThemeStyles from '../../hooks/themes/useThemeStyles';
import useTheme from '../../hooks/themes/useTheme';
import styles from './styles';

const CustomButton = props => {
  const style = useThemeStyles(styles);
  const theme = useTheme();

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

  const shapeHandle = shape => {
    switch (shape) {
      case 'ROUND':
        return style.round;
      case 'WIDE':
        return style.wide;
    }
  };

  const iconColor = () => {
    if (
      props.type === 'GHOST' ||
      props.type === 'OUTLINE' ||
      props.status === 'DISABLE'
    ) {
      return theme.colors.TextColor;
    } else {
      return '#fafafa';
    }
  };

  const statusStyle = statusHandle(props.status);
  const typeStyle = typeHandle(props.type);
  const shapeStyle = shapeHandle(props.shape);
  const color = iconColor();

  return (
    <TouchableOpacity
      style={[style.button, statusStyle, typeStyle, shapeStyle, props.style]}
      onPress={() => props.onpress()}>
      {props.text && <Text style={[style.buttonText, {color: color}]}>{props.text}</Text>}
      {props.children}
      {props.icon && <Icon name={props.icon} size={25} color={color} />}
    </TouchableOpacity>
  );
};

export default CustomButton;
