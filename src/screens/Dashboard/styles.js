import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    superContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.secondaryBackground,
    },

    addCategoryButton: {
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 60,
      right: 30,
    },

    noData: {
      flex: 1,
      flexWrap: 'wrap',
      width: '60%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    noDataText: {
      fontSize: theme.typography.size.M,
      fontWeight: theme.typography.weight.bold,
      padding: theme.box.boxModel.M,
      color: theme.colors.SecondaryTextColor,
    },
  });

export default styles;
