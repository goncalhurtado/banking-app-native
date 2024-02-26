import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";
import appbar from "../style/AppBar";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import { Link } from "react-router-native";

const BOTTOM_APPBAR_HEIGHT = 56;

export default function BottomAppbar() {
  const { bottom } = useSafeAreaInsets();

  const links = [
    {
      path: "/",
      icon: "home",
      text: "Inicio",
    },
    {
      path: "/transfers",
      icon: "swap",
      text: "Transferir",
    },
    {
      path: "/profile",
      icon: "user",
      text: "Mi Cuenta",
    },
    // {
    //   path: "/config",
    //   icon: "setting",
    //   text: "Configuracion",
    // }
  ];

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
          {links.map((link, index) => (
            <Link to={link.path} style={appbar.button} key={index}>
              <View style={appbar.button}>
                <Icon name={link.icon} size={25} color="white" />
                <Text style={appbar.text}>{link.text}</Text>
              </View>
            </Link>
          ))}
        </View>
      </View>
    </View>
  );
}
