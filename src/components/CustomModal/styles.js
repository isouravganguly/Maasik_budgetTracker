import {StyleSheet} from 'react-native';
import { ThemeContext } from '../../themes/ThemeProvider';

const styles = theme =>
  StyleSheet.create({
    modalView: {
      marginTop: "20%",
      height: '50%',
      margin: 20,
      backgroundColor: theme.colors.Background,
      borderRadius: 20,
      padding: 25,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    closeButton: {
      alignSelf: 'flex-end',
      fontWeight: theme.typography.size.M,
    },

    modalHeader:{
      alignSelf: 'center',
      fontSize: theme.typography.size.L,
      color: theme.colors.TextColor,
      fontWeight: theme.typography.weight.bold,
    },

    modalChild:{
      flex: 1,
      justifyContent: 'space-around',
      alignItems: 'center',
    }
  });

export default styles;
