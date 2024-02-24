import { SafeAreaView } from "react-native-safe-area-context";
import BottomAppbar from "./components/BottomAppbar";
import Home from "./pages/Home.js";
import Config from "./pages/Config.js";
import Transfers from "./pages/Transfers.js";
import { Routes, Route } from "react-router-native";
import { useState, useEffect } from "react";
import UserContext from "./context/userContext";
import BalanceContext from "./context/balanceContext"; // Importa BalanceContext
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Main() {
  const [user, setUser] = useState({
    id: "65d68a4114615604f918e313",
    name: "Ramaj",
    lastname: "Emilio",
    email: "ramaj@mail.com",
    cvu: "7352391315853",
    alias: "ramaj.emilio.fakebank",
  });

  const [balance, setBalance] = useState(null); // Crea un estado para el balance

  return (
    <UserContext.Provider value={user}>
      <BalanceContext.Provider value={{ balance, setBalance }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/config" element={<Config />} />
              <Route path="/transfers" element={<Transfers />} />
            </Routes>
          </View>
          <BottomAppbar />
        </SafeAreaView>
      </BalanceContext.Provider>
    </UserContext.Provider>
  );
}

export default Main;
