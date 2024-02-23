import { Text, View } from "react-native";
import { transferHistoryStyle } from "../../style/HomeStyle";
import UserContext from "../../context/userContext";
import { useContext } from "react";
import TransferItem from "./TransferItem";

function TransferHistory({ transferHistory }) {
  const user = useContext(UserContext);

  return (
    <View>
      <Text style={transferHistoryStyle.title}>Movimientos</Text>
      <View style={transferHistoryStyle.container}>
        {transferHistory.map((transfer, index) => (
          <TransferItem transfer={transfer} key={index} user={user} />
        ))}
      </View>
    </View>
  );
}

export default TransferHistory;
