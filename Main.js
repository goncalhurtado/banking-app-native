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
import Profile from "./pages/Profile.js";

function Main() {
  const [user, setUser] = useState({
    _id: "65d692124964ee4f1fc1a349",
    name: "Severo",
    lastname: "Los dedos",
    email: "akshay@mail.com",
    cvu: "5146498576331",
    alias: "akshay.goncal.fakebank",
  });

  const [balance, setBalance] = useState(null);
  const [hideAppbar, setHideAppbar] = useState(false);

  return (
    <UserContext.Provider value={user}>
      <BalanceContext.Provider value={{ balance, setBalance }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={<Home setHideAppbar={setHideAppbar} />}
              />
              {/* <Route path="/config" element={<Config />} /> */}
              <Route
                path="/transfers"
                element={<Transfers setHideAppbar={setHideAppbar} />}
              />
              <Route
                path="/profile"
                element={<Profile setHideAppbar={setHideAppbar} />}
              />
            </Routes>
          </View>
          <View
            style={{
              display: hideAppbar ? "none" : "flex",
            }}
          >
            <BottomAppbar />
          </View>
        </SafeAreaView>
      </BalanceContext.Provider>
    </UserContext.Provider>
  );
}

export default Main;
