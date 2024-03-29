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
    fontSize: 40,
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
  },
});

export const transferHistoryStyle = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
  },
  itemContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatar: {
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const transferDetailStyle = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bankName: {
    fontSize: 20,
    fontWeight: "bold",
    marginEnd: 35,
    color: "#6200EE",
  },
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontSize: 20,
    margin: 1,
    fontWeight: "bold",
  },
  state: {
    margin: 10,
    color: "green",
    fontWeight: "bold",
    backgroundColor: "#83f28f",
    padding: 10,
  },
  subTitle: {
    fontSize: 14,
    margin: 2,
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});
