import { StyleSheet } from "react-native";

const styles = theme =>
StyleSheet.create({

    button:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: theme.box.boxModel.M,
        borderRadius: theme.box.borderRadius.x2,
        width: "70%"
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
        backgroundColor: theme.colors.secondaryBackground,
        borderColor: theme.colors.Background,
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

    }
});

export default styles
    
