import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { balanceStyle } from "../../style/HomeStyle";

function Balance({ balance }) {
  console.log(balance);
  return (
    <View style={balanceStyle.container}>
      <Text style={balanceStyle.title}>Saldo</Text>
      <Text style={balanceStyle.balance}>{balance}</Text>
    </View>
  );
}

export default Balance;
