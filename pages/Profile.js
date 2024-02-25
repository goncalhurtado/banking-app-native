import { View, TouchableOpacity, ScrollView } from "react-native";
import { List, Avatar } from "react-native-paper";
import UserContext from "../context/userContext";
import { setInitials } from "../helpers/fromatInfo";
import { useContext } from "react";
import { useNavigate } from "react-router-native";

const Profile = () => {
  const user = useContext(UserContext);
  const { name, lastname, email, cvu, alias } = user;
  const initials = setInitials(`${name} ${lastname}`);

  const options = [
    { title: "Mi CVU y Alias", icon: "bank", path: "/profile/data" },
    { title: "Soporte", icon: "chat-outline", path: "/profile/help" },
    { title: "Cerrar Sesion", icon: "logout", path: "" },
  ];
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <View style={{ padding: 10 }}>
      <List.Section>
        <TouchableOpacity>
          <List.Item
            title={`${name} ${lastname}`}
            description="Ver mis datos"
            left={(props) => (
              <Avatar.Text
                style={{ alignSelf: "center" }}
                size={35}
                label={initials}
              />
            )}
          />
        </TouchableOpacity>
        <ScrollView style={{ height: "100%" }}>
          {options.map((option, index) => (
            <List.Item
              key={index}
              title={option.title}
              onPress={() => {
                option.path === "" ? handleLogout : handleNavigate(option.path);
              }}
              left={() => <List.Icon icon={option.icon} />}
            />
          ))}
        </ScrollView>
      </List.Section>
    </View>
  );
};

export default Profile;
