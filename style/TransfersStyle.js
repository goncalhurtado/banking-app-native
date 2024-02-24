import { StyleSheet } from "react-native";

export const transfersStyle = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  container: {
    padding: 10,
  },
  btnSimple: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6200EE",
    textAlign: "center",
  },
  icon: {
    // paddingBottom: 15,
  },
  button: {
    backgroundColor: "#6200EE",
    width: "32%",
    height: 100,
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#e6d9ff",
    width: "32%",
    height: 100,
    borderRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textOnBtn: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
  textOnBtnSec: {
    color: "#6200EE",
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    margin: 0,
    padding: 0,
    color: "#ffffff",
  },

  transferBtn: {
    backgroundColor: "#6200EE",
    width: "100%",
    height: 50,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
