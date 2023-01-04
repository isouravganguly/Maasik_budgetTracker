import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    helloname: {
      fontSize: theme.typography.size.L,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.TextColor,
    },

    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: theme.colors.secondaryBackground,
    },
  });

export default styles;
