import { StyleSheet } from "react-native";

const styles = theme =>
StyleSheet.create({

    button:{
        justifyContent: "space-around",
        // alignItems: "center",
        flexDirection: "row",
    },

    buttonText: {
        fontWeight: theme.typography.weight.bold,
        color: theme.colors.Background,
        fontSize: theme.typography.size.M,
        padding: theme.box.boxModel.S,
    },
    // ------------ TYPES -------------------

    fill:{
        backgroundColor: theme.colors.Secondary,
    },
    outline:{
        backgroundColor: theme.colors.secondaryBackground,
        borderWidth: 2,
        borderColor: theme.colors.TextColor,
    },
    ghost:{
    },

    // ------------ STATUS -------------------

    disable:{
        backgroundColor: theme.colors.Secondary,
        borderWidth: 2,
        borderColor: theme.colors.secondaryBackground,
        opacity: 0.6,
    },
    able:{
        backgroundColor: theme.colors.Secondary,
        borderWidth:2,
        borderColor: theme.colors.secondaryBackground,
        opacity: 0.6,

    },

    // ------------ SHAPE -------------------

    round:{
        // padding: theme.box.boxModel.XL,
        borderRadius: theme.box.borderRadius.x5,
    },

    wide: {
        padding: theme.box.boxModel.M,
        paddingHorizontal: "8%",
        borderRadius: theme.box.borderRadius.x2,
        padding: theme.box.boxModel.M,

    }
});

export default styles
    
