import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";
import { ScrollView, View } from "react-native";
import BottomAppbar from "./components/BottomAppbar";
import Home from "./pages/Home.js";
import Config from "./pages/Config.js";
import Transfers from "./pages/Transfers.js";
import { Routes, Route } from "react-router-native";

function Main() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<Config />} />
        <Route path="/transfers" element={<Transfers />} />
      </Routes>
      <BottomAppbar />
    </SafeAreaView>
  );
}

export default Main;
