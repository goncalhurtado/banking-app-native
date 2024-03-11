import { SafeAreaView } from "react-native-safe-area-context";
import BottomAppbar from "./components/BottomAppbar";
import Home from "./pages/Home.js";
import Config from "./pages/Config.js";
import Transfers from "./pages/Transfers.js";
import { Routes, Route, useNavigate } from "react-router-native";
import { useState, useEffect, useContext } from "react";
import UserContext from "./context/userContext";
import BalanceContext from "./context/balanceContext"; // Importa BalanceContext
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Profile from "./pages/Profile.js";
import Login from "./pages/Login.js";

function Main() {
  const [balance, setBalance] = useState(null);
  const [user, setUser] = useState(null);
  const [hideAppbar, setHideAppbar] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      setHideAppbar(true);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BalanceContext.Provider value={{ balance, setBalance }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={<Home setHideAppbar={setHideAppbar} />}
              />
              <Route
                path="/transfers"
                element={<Transfers setHideAppbar={setHideAppbar} />}
              />
              <Route
                path="/profile"
                element={<Profile setHideAppbar={setHideAppbar} />}
              />
              <Route path="/login" element={<Login />} />
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
