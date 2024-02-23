import { StyleSheet } from "react-native";

const appbar = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    backgroundColor: "#6200EE",
    padding: 0,
    margin: 0,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
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
});

export default appbar;
