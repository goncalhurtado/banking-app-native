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
    height: "100%",
    flexDirection: "column",
    // backgroundColor: "red",
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

export const amountStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  destinationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 15,
    color: "grey",
  },
  amount: {
    width: "auto",
    height: "auto",
    fontSize: 40,
    fontWeight: "bold",
    color: "#6200EE",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#6200EE",
    width: "auto",
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const checkout = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCont: {
    backgroundColor: "#e6d9ff",
    width: 100,
    height: 100,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    fontSize: 50,
    color: "#6200EE",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#6200EE",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "grey",
    width: "80%",
    height: "auto",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#6200EE",
    width: "auto",
    height: 50,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
