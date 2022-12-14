import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    textbox: {
      justifyContent: 'space-around',
      padding: theme.box.boxModel.M,
    },

    subcontainer: {
      width: '90%',
      backgroundColor: theme.colors.secondaryBackground,
    },

    cardTitle: {
        padding: theme.box.boxModel.S,
        fontSize: theme.typography.size.M,
        fontWeight: theme.typography.weight.bold,
        alignSelf: 'flex-start',
    },

    cardInfoTitle:{
        fontSize: theme.typography.size.S,
        fontWeight: theme.typography.weight.bold,
        color: theme.colors.highlightText
    },

    cardInfoSubtitle:{
        fontSize: theme.typography.size.M,
        fontWeight: theme.typography.weight.bold,
        color: theme.colors.SecondaryTextColor,
    }
  });

export default styles;
