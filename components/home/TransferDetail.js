import { Avatar, IconButton } from "react-native-paper";
import { Text, View } from "react-native";
import { format, isToday, set } from "date-fns";
import { transferDetailStyle } from "../../style/HomeStyle";
import { setInitials, formatDate } from "../../helpers/fromatInfo";
import UserContext from "../../context/userContext";
import { useContext } from "react";

const TransferDetail = ({ transfer, setDetail }) => {
  const user = useContext(UserContext);

  const { origin, destination, amount, createdAt } = transfer.data;

  const originName = `${origin.name} ${origin.lastname}`;
  const destinationName = `${destination.name} ${destination.lastname}`;

  const isOriginUser = origin._id === user.id;
  const name = isOriginUser ? destinationName : originName;
  //   const initials = setInitials(name);

  const goBack = () => {
    setDetail({
      visible: false,
      data: transfer,
    });
  };

  return (
    <View>
      <View>
        <View style={transferDetailStyle.header}>
          <IconButton
            icon="close"
            size={20}
            onPress={goBack}
            style={{ margin: 0 }}
          />
          <Text style={transferDetailStyle.bankName}>TatiBank</Text>
          <View></View>
        </View>
        <View style={transferDetailStyle.container}>
          <Text style={transferDetailStyle.subTitle}>
            {isOriginUser ? "Envio de dinero a" : "Recibiste dinero de"}
          </Text>
          <Text style={transferDetailStyle.name}>
            {originName ? name : destinationName}
          </Text>
          <Text style={transferDetailStyle.subTitle}>
            {formatDate(createdAt)}
          </Text>
          <Text style={transferDetailStyle.amount}>${amount}</Text>
          <Text style={transferDetailStyle.state}>
            {isOriginUser ? "Transferencia enviada" : "Transferencia recibida"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TransferDetail;
