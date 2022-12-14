import { StyleSheet } from "react-native"

const styles = theme => StyleSheet.create({
    helloname: {
        fontSize: theme.typography.size.XL,
        fontWeight: theme.typography.weight.bold,
    },

    headerContainer:{
        marginTop: 30,
        padding: 30,
    }
})

export default styles