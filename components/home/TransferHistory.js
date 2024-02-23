import { Text } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { transferHistoryStyle } from "../../style/HomeStyle";

function Balance() {
  return (
    <View>
      <Text style={transferHistoryStyle.title}>Movimientos</Text>
      <View style={transferHistoryStyle.container}></View>
    </View>
  );
}

export default Balance;
