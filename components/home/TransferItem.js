import { Avatar } from "react-native-paper";
import { Text, View } from "react-native";
import { transferHistoryStyle } from "../../style/HomeStyle";
import { formatDate, setInitials } from "../../helpers/fromatInfo";

const TransferItem = ({ transfer, user }) => {
  const { origin, destination, amount } = transfer;

  const originName = `${origin.name} ${origin.lastname}`;
  const destinationName = `${destination.name} ${destination.lastname}`;

  const isOriginUser = origin._id === user._id;
  const name = isOriginUser ? destinationName : originName;
  const initials = setInitials(name);

  return (
    <View style={transferHistoryStyle.itemContainer}>
      <Avatar.Text
        style={transferHistoryStyle.avatar}
        size={30}
        label={initials}
      />
      <View style={{ textAling: "left", flex: 1 }}>
        <Text style={transferHistoryStyle.name}>{name}</Text>
        <Text>{formatDate(transfer.createdAt)}</Text>
      </View>
      <View>
        <Text
          style={[
            transferHistoryStyle.amount,
            { color: isOriginUser ? "red" : "green" },
          ]}
        >
          {isOriginUser ? `-${amount}` : `+${amount}`}
        </Text>
      </View>
    </View>
  );
};

export default TransferItem;
