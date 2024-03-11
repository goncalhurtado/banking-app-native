import { View, Text, TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import { useContext } from "react";
import UserContext from "../context/userContext";
import Qr from "./Qr";

const MyAccountData = ({ setAction }) => {
  const user = useContext(UserContext);

  const goBack = () => {
    setAction(false);
  };

  return (
    <>
      <View style={{ marginBottom: 5 }}>
        <Icon name="close" size={25} color="#6200EE" onPress={goBack} />
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Qr data={user._id} />
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >{`${user.name} ${user.lastname}`}</Text>
            <Text
              style={{
                textAlign: "center",
                // width: "80%",
              }}
            >
              Escaneando este Qr te pueden transferir
            </Text>
          </View>
        </View>
        <List.Item
          title="Mi CVU"
          description={user.cvu}
          right={(props) => (
            <List.Icon
              style={{ alignSelf: "center" }}
              size={35}
              icon="share-variant"
              color="#6200EE"
            />
          )}
        />
        <List.Item
          title="Mi Alias"
          description={user.alias}
          right={(props) => (
            <List.Icon
              style={{ alignSelf: "center" }}
              size={35}
              icon="share-variant"
              color="#6200EE"
            />
          )}
        />
      </View>
    </>
  );
};

export default MyAccountData;
