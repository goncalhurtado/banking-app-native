import { StyleSheet } from "react-native";

export const homeStyle = StyleSheet.create({
  container: {
    // textAlign: "center",
    padding: 10,
    // alignItems: "center",
    // margin: 10,
  },
});

export const balanceStyle = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  balance: {
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
  },
});

export const transferHistoryStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
  },
});
