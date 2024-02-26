import { Text, View, ScrollView } from "react-native";
import Balance from "../components/home/Balance";
import TransferHistory from "../components/home/TransferHistory";
import { homeStyle } from "../style/HomeStyle";
import { useState, useEffect, useContext } from "react";
import { axiosInstance } from "../config/axiosInstance";
import UserContext from "../context/userContext";
import BalanceContext from "../context/balanceContext";

const Home = ({ setHideAppbar }) => {
  const [transferHistory, setTransferHistory] = useState([]);
  const [detail, setDetail] = useState({ visible: false, data: {} });
  const [loading, setLoading] = useState(true);

  const user = useContext(UserContext);
  const { balance, setBalance } = useContext(BalanceContext);

  const getBalance = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/balance/${user._id}`);
      setLoading(false);
      const { balanceAmount } = response.data;
      setBalance(balanceAmount);
    } catch (error) {
      console.error(error);
    }
  };

  const getTransferHistory = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/transactions/${user._id}?limit=15&page=1`
      );
      setLoading(false);
      const { transactions } = response.data;
      setTransferHistory(transactions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setHideAppbar(false);
    getBalance();
    getTransferHistory();
  }, []);

  return (
    <ScrollView style={homeStyle.container}>
      {!detail.visible ? <Balance balance={balance} /> : null}
      {!loading ? (
        <TransferHistory
          transferHistory={transferHistory}
          setDetail={setDetail}
          detail={detail}
        />
      ) : (
        <View style={homeStyle.noHistoryContainer}>
          <Text style={homeStyle.noHistoryText}>Cargando</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Home;
