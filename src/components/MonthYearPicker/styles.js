import { StyleSheet } from "react-native";

const styles = theme => (
    StyleSheet.create({
        datePickerButtonText:{
            fontSize: theme.typography.size.M,
            color: theme.colors.TextColor,
            fontWeight: theme.typography.weight.bold,
        }
    })
)

export default styles;