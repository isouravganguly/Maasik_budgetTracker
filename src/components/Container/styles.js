import {StyleSheet} from 'react-native';
const styles = theme =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.box.boxModel.M,
      borderRadius: theme.box.borderRadius.x1
    },
  });

export default styles;
