import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    progressBar: {
      borderRadius: theme.box.borderRadius.x2,
      height: theme.box.length.l2,
      width: '90%',
      backgroundColor: theme.colors.Background,
      margin: theme.box.boxModel.M,
    },

    realProgress: width => ({
      borderRadius: theme.box.borderRadius.x2,
      backgroundColor: theme.colors.Primary,
      height: theme.box.length.l2,
      width: width,
      
    }),
  });

export default styles;
