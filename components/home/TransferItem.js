import { Avatar } from "react-native-paper";
import { Text, View } from "react-native";
import { transferHistoryStyle } from "../../style/HomeStyle";
import { format, isToday } from "date-fns";

const TransferItem = ({ transfer, user }) => {
  const { origin, destination, amount } = transfer;

  const setInitials = (name, lastname) => {
    const initial = name[0] + lastname[0];

    return initial.toUpperCase();
  };

  const getFullName = (name, lastname) => {
    return `${name} ${lastname}`;
  };
  const formatDate = (date) => {
    const transferDate = new Date(date);

    if (isToday(transferDate)) {
      return `Hoy ${format(transferDate, "HH:mm")}`;
    }

    return format(transferDate, "dd/MM/yyyy HH:mm");
  };
  return (
    <View style={transferHistoryStyle.itemContainer}>
      <Avatar.Text
        style={transferHistoryStyle.avatar}
        size={24}
        label={
          origin._id === user.id
            ? setInitials(destination.name, destination.lastname)
            : setInitials(origin.name, origin.lastname)
        }
      />

      <View style={{ textAling: "left", flex: 1 }}>
        <Text style={transferHistoryStyle.name}>
          {origin._id === user.id
            ? getFullName(destination.name, destination.lastname)
            : getFullName(origin.name, origin.lastname)}
        </Text>
        <Text>{formatDate(transfer.createdAt)}</Text>
      </View>
      <View>
        <Text
          style={[
            transferHistoryStyle.amount,
            { color: origin._id === user.id ? "red" : "green" },
          ]}
        >
          {origin._id === user.id ? `-${amount}` : `+${amount}`}
        </Text>
      </View>
    </View>
  );
};

export default TransferItem;
