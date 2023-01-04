import { StyleSheet } from "react-native";

const styles = theme => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginBackground: {
    flex: 1,
    alignItems: 'center',
  },

  LoginText: {
    position: 'absolute',
    top: 100,
    fontSize: 50,
    fontWeight: '700',
    marginBottom: 50,
  },

  inputBox: {
    backgroundColor: theme.colors.Background,
    borderRadius: theme.box.borderRadius.x2,
    minWidth: '60%',
    padding: 8,
    margin: 8,
    height: 40,
    fontSize: 25,
    height: 50,
    paddingLeft: 15,
  },

  shadow: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 3,
  },

  signUpText:{
    fontWeight: theme.typography.weight.bold,
    fontSize: theme.typography.size.S,
    padding: theme.box.boxModel.S,
    color: theme.colors.highlightText,
  },

  AuthButtons:{
        marginTop: "10%",
    },
})

export default styles