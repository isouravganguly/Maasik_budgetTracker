import { StyleSheet } from "react-native";
import { ScreenStackHeaderRightView } from "react-native-screens";

const styles = theme => 
    StyleSheet.create({
        modalView:{
            marginTop: 50,
            height: "50%",
            margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

        roundButton:{
            alignSelf: "flex-end",
            // position: "absolute",
            padding: 10,
            // right: 20,
            // top: 20,
            borderRadius: 25,
            backgroundColor: theme.colors.secondaryBackground,
        }
    })

    export default styles