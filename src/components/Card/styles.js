import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    textbox: {
      justifyContent: 'space-around',
      padding: theme.box.boxModel.M,
    },

    subcontainer: {
      minWidth: '95%',
      // marginHorizontal: theme.box.boxModel.L,
      backgroundColor: theme.colors.Background,
      margin: theme.box.boxModel.M,
      padding: theme.box.boxModel.L,
      borderRadius: theme.box.borderRadius.x1,
      marginHorizontal: theme.box.boxModel.M,
    },

    cardTitle: {
      padding: theme.box.boxModel.S,
      fontSize: theme.typography.size.M,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.TextColor,
      marginLeft: theme.box.boxModel.M,

      // alignSelf: 'flex-start',
    },

    cardInfoTitle: {
      fontSize: theme.typography.size.S,
      fontWeight: theme.typography.weight.bold,
      color: theme.colors.SecondaryTextColor,
    },

    cardInfoSubtitle: {
      fontSize: theme.typography.size.M,
      fontWeight: theme.typography.weight.extraBold,
      color: theme.colors.highlightText,
    },
  });

export default styles;
