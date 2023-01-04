import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    progressBar: {
      borderRadius: theme.box.borderRadius.x2,
      height: theme.box.length.l2,
      // width: '90%',
      backgroundColor: theme.colors.secondaryBackground,
      margin: theme.box.boxModel.M,
      marginVertical: theme.box.boxModel.L,
    },

    realProgress: {
      borderRadius: theme.box.borderRadius.x2,
      backgroundColor: theme.colors.Secondary,
      height: theme.box.length.l2,
    },
  });

export default styles;
