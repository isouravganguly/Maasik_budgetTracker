import { StyleSheet } from "react-native";

import useThemeStyles from "../../hooks/themes/useThemeStyles";

const styles = theme =>{
StyleSheet.create({

    button:{
        padding: theme.box.boxModel.L,
        borderRadius: theme.box.borderRadius.x2,
        width: theme.box.boxModel.XL,
    },

    // ------------ TYPES -------------------

    fill:{
        backgroundColor: theme.color.Secondary,
    },
    outline:{
        backgroundColor: theme.color.secondaryBackground,
        borderWidth: 2,
        borderColor: theme.color.TextColor,
    },
    ghost:{
        backgroundColor: theme.color.secondaryBackground,
        borderColor: theme.color.Background,
    },

    // ------------ STATUS -------------------

    disable:{
        backgroundColor: theme.color.Secondary,
        borderWidth: 2,
        borderColor: theme.color.secondaryBackground,
        opacity: 0.6,
    },
    able:{
        backgroundColor: theme.color.Secondary,
        borderWidth:2,
        borderColor: theme.color.secondaryBackground,
        opacity: 0.6,

    }
});
}
    
