import {StyleSheet} from 'react-native';

const styles = theme =>
  StyleSheet.create({
    superContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.secondaryBackground
    },

    // addCategoryButton: {
    //   position: 'absolute',
    //   bottom: 50,
    //   right: 40,
    //   alignSelf: 'flex-end',
    // },

    noData:{
      flex: 1,
      flexWrap: 'wrap',
      width: "60%",
      alignItems: 'center',
      justifyContent: 'center',
      
    },

    noDataText:{
      fontSize: theme.typography.size.M,
      fontWeight: theme.typography.weight.bold,
      padding: theme.box.boxModel.M,
      color: theme.colors.SecondaryTextColor,
    }

  });

export default styles;
