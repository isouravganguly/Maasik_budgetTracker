import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    superContainer: {
      backgroundColor: theme.colors.secondaryBackground,
    },

    subContainer: {
      flex: 1,
      backgroundColor: theme.colors.secondaryBackground,
      width: '100%',
      paddingHorizontal: '5%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    TitleText: {
      fontSize: theme.typography.size.M,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.TextColor,
    },

    line: {
      height: 2,
      width: '40%',
      backgroundColor: theme.colors.TextColor,
    },

    amount: {
      color: theme.colors.highlightText,
      fontSize: theme.typography.size.XXL,
      fontWeight: theme.typography.weight.bold,
    },

    subTitleText: {
      fontSize: theme.typography.size.M,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.TextColor,
      color: theme.colors.SecondaryTextColor,
      paddingBottom: 20,
    },

    subHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },

    subText: {
      fontSize: theme.typography.size.M,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.SecondaryTextColor,
    },

    subTextHighlight: {
      fontSize: theme.typography.size.M,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.highlightText,
    },

    expenseBox: {
      flex: 2,
      // padding: "5%",
      width: '100%',
      backgroundColor: theme.colors.Background,
      borderRadius: theme.box.borderRadius.x3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },

    expenseHeader:{
      marginVertical: "2%",
      alignSelf: 'flex-start',
    },

    expenseBoxButton: {
      position: 'absolute',
      bottom: 50,
      alignSelf: 'center',
    },

    horizontalLine: {
      height: 2,
      width: '80%',
      alignSelf: 'center',
      backgroundColor: theme.colors.SecondaryTextColor,
    },

    expenseList: {
      padding: 10,
      marginBottom: 120,
    },

    expenseItemTitle: {
      fontWeight: theme.typography.weight.bold,
      fontSize: theme.typography.size.M,
      color: theme.colors.TextColor,
    },

    expenseItemValue: {
      fontWeight: theme.typography.weight.bold,
      fontSize: theme.typography.size.M,
      color: theme.colors.highlightText,
    },
  });

export default styles;
