import { View, TouchableOpacity, ScrollView } from "react-native";
import { List, Avatar } from "react-native-paper";
import UserContext from "../context/userContext";
import { setInitials } from "../helpers/fromatInfo";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-native";
import OptionProfile from "../components/profile/OptionProfile";
import HeaderProfile from "../components/profile/HeaderProfile";
import MyAccountData from "../components/MyAccountData";

const Profile = () => {
  const user = useContext(UserContext);

  const [action, setAction] = useState(false);

  const options = [
    { title: "Mi CVU y Alias", icon: "bank", action: "mydata" },
    { title: "Acerca de esta App", icon: "chat-outline", action: "support" },
    { title: "Cerrar Sesion", icon: "logout", action: "logout" },
  ];

  return (
    <View style={{ padding: 10 }}>
      {!action && (
        <List.Section>
          <TouchableOpacity>
            <HeaderProfile user={user} />
          </TouchableOpacity>
          <ScrollView style={{ height: "100%" }}>
            <OptionProfile options={options} setAction={setAction} />
          </ScrollView>
        </List.Section>
      )}
      {action === "mydata" && <MyAccountData setAction={setAction} />}
    </View>
  );
};

export default Profile;
