import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";
import { ScrollView, View } from "react-native";
import BottomAppbar from "./components/BottomAppbar";

function Main() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>{/* Aquí va el resto de tu contenido */}</View>
      <BottomAppbar />
    </SafeAreaView>
  );
}

export default Main;
