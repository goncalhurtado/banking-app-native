import { amountStyle } from "../../style/TransfersStyle";
import { Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { setInitials } from "../../helpers/fromatInfo";

const DestinationHeader = ({ name, lastname, balance }) => {
  const fullName = `${name} ${lastname}`;
  const initials = setInitials(fullName);

  return (
    <View style={amountStyle.container}>
      <View style={amountStyle.destinationContainer}>
        <Avatar.Text size={50} label={initials} backgroundColor="#6200EE" />
        <Text style={amountStyle.name}>{fullName}</Text>
        <Text style={amountStyle.balance}>Tu saldo: ${balance}</Text>
      </View>
    </View>
  );
};

export default DestinationHeader;
