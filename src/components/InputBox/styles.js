import {StyleSheet} from 'react-native';

const styles = theme => StyleSheet.create({
    inputBox:{
        backgroundColor: theme.colors.secondaryBackground,
        borderRadius: theme.box.borderRadius.x2,
        marginVertical: theme.box.boxModel.M,
        height: theme.box.length.l5,
        padding: theme.box.boxModel.L,
        minWidth: "100%",
    }
});

export default styles
