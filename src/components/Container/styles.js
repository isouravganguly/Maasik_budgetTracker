import {StyleSheet} from 'react-native';
const styles = theme =>
  StyleSheet.create({
    container: {
      flex:1,
      // justifyContent: 'center',
      // alignItems: 'center',
      paddingVertical: theme.box.boxModel.M,
      // borderRadius: theme.box.borderRadius.x1
    },
  });

export default styles;
