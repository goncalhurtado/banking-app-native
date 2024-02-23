import { SafeAreaProvider } from "react-native-safe-area-context";

import Main from "./Main.js";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
