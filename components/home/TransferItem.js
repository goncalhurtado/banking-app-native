import { Avatar } from "react-native-paper";
import { Text, View } from "react-native";
import { transferHistoryStyle } from "../../style/HomeStyle";

const TransferItem = ({ transfer, user }) => {
  const { origin, destination, amount } = transfer;

  const setInitials = (name, lastname) => {
    const initial = name[0] + lastname[0];

    return initial.toUpperCase();
  };

  const getFullName = (name, lastname) => {
    return `${name} ${lastname}`;
  };

  return (
    <View style={transferHistoryStyle.itemContainer}>
      <Avatar.Text
        size={24}
        label={
          origin._id === user.id
            ? setInitials(destination.name, destination.lastname)
            : setInitials(origin.name, origin.lastname)
        }
      />

      <View style={{ textAling: "start" }}>
        <Text>
          {origin._id === user.id
            ? getFullName(destination.name, destination.lastname)
            : getFullName(origin.name, origin.lastname)}
        </Text>
      </View>
      <View>
        <Text style={{ color: origin._id === user.id ? "red" : "green" }}>
          {origin._id === user.id ? `-${amount}` : `+${amount}`}
        </Text>
      </View>
    </View>
  );
};

export default TransferItem;
