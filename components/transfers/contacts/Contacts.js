import { View, TouchableOpacity, ScrollView, Text } from "react-native";
import { List, Avatar } from "react-native-paper";
import { setInitials } from "../../../helpers/fromatInfo";

const Contacts = ({ data, setContact }) => {
  const handleSelect = (contact) => {
    setContact({ selected: true, data: contact });
  };

  return (
    <ScrollView style={{ padding: 0 }}>
      <View>
        <>
          {data.map((contact, index) => (
            <TouchableOpacity key={index} onPress={() => handleSelect(contact)}>
              <List.Item
                title={`${contact.name} ${contact.lastname}`}
                description={contact.cvu}
                left={(props) => (
                  <Avatar.Text
                    style={{ alignSelf: "center" }}
                    size={35}
                    label={setInitials(`${contact.name} ${contact.lastname}`)}
                  />
                )}
              />
            </TouchableOpacity>
          ))}
        </>
      </View>
    </ScrollView>
  );
};

export default Contacts;
