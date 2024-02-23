import { Text, View } from "react-native";
import Balance from "../components/home/Balance";
import TransferHistory from "../components/home/TransferHistory";
import { homeStyle } from "../style/HomeStyle";
const Home = () => {
  return (
    <View style={homeStyle.container}>
      <Balance />
      <TransferHistory />
    </View>
  );
};

export default Home;
