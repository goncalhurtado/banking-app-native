import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import appbar from "../style/AppBar";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import { Link } from "react-router-native";
import { Avatar } from "react-native-paper";
import { useContext } from "react";
import UserContext from "../context/userContext";
import { setInitials } from "../helpers/fromatInfo";

const BOTTOM_APPBAR_HEIGHT = 56;

export default function BottomAppbar() {
  const user = useContext(UserContext);
  const originName = `${user.name} ${user.lastname}`;
  const initials = setInitials(originName);
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          height: BOTTOM_APPBAR_HEIGHT + bottom,
        }}
      >
        <View style={appbar.container}>
          <Link to="/" style={appbar.button}>
            <View style={appbar.button}>
              <Icon name="home" size={25} color="white" />
              <Text style={appbar.text}>Inicio</Text>
            </View>
          </Link>

          <Link to="/transfers" style={appbar.button}>
            <View style={appbar.button}>
              <Icon name="swap" size={25} color="white" />
              <Text style={appbar.text}>Transferir</Text>
            </View>
          </Link>
          <Link to="/profile" style={appbar.button}>
            <View style={appbar.button}>
              <Icon name="user" size={25} color="white" />
              <Text style={appbar.text}>Mi Cuenta</Text>
            </View>
          </Link>

          <Link to="/config" style={appbar.button}>
            <View style={appbar.button}>
              <Icon name="setting" size={25} color="white" />
              <Text style={appbar.text}>Configuracion</Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
}
