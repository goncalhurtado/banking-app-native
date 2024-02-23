import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter } from "react-router-native";
import Main from "./Main.js";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <Main />
      </NativeRouter>
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
