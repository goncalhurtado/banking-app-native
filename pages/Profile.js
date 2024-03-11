import { View, TouchableOpacity, ScrollView, Alert } from "react-native";
import { List, Avatar } from "react-native-paper";
import UserContext from "../context/userContext";
import { setInitials } from "../helpers/fromatInfo";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-native";
import OptionProfile from "../components/profile/OptionProfile";
import HeaderProfile from "../components/profile/HeaderProfile";
import MyAccountData from "../components/MyAccountData";
import { set } from "date-fns";

const Profile = ({ setHideAppbar }) => {
  const { user, setUser } = useContext(UserContext);

  const [action, setAction] = useState(false);

  const navigate = useNavigate();

  const options = [
    { title: "Mi CVU y Alias", icon: "bank", action: "mydata" },
    { title: "Acerca de esta App", icon: "chat-outline", action: "support" },
    { title: "Cerrar Sesion", icon: "logout", action: "logout" },
  ];

  useEffect(() => {
    if (!action) {
      setHideAppbar(false);
    }
    if (action === "logout") {
      setHideAppbar(false);
    }
    if (action && action !== "logout") {
      setHideAppbar(true);
    }
  }, []);

  return (
    <View style={{ padding: 10 }}>
      {!action && (
        <List.Section>
          <TouchableOpacity disabled={true}>
            <HeaderProfile user={user} />
          </TouchableOpacity>
          <ScrollView style={{ height: "100%" }}>
            <OptionProfile options={options} setAction={setAction} />
          </ScrollView>
        </List.Section>
      )}
      {action === "mydata" && <MyAccountData setAction={setAction} />}
      {action === "logout" && (
        <LoggOut setUser={setUser} navigate={navigate} setAction={setAction} />
      )}
    </View>
  );
};

const LoggOut = ({ setUser, navigate, setAction }) =>
  Alert.alert("¿Seguro que quieres salir de tu cuenta?", "", [
    {
      text: "Cerrar Sesion",
      onPress: () => {
        navigate("/"), setUser(null);
      },
    },
    {
      text: "Volver atras",
      onPress: () => setAction(false),
      style: "cancel",
    },
  ]);

export default Profile;
