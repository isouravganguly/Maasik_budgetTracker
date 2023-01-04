import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    parentErrorBox: {
      position: 'absolute',
    },

    errorbox: {
      borderRadius: theme.box.borderRadius.x1,
      width: '90%',
      flexDirection: 'row',

      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'center',
      padding: 8,

      backgroundColor: theme.colors.Background,
      shadowColor: theme.colors.SecondaryTextColor,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },

    errorboxText: {
      fontSize: theme.typography.size.S,
      fontWeight: theme.typography.weight.bold,
    },
  });

export default styles;
