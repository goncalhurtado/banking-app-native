import { Text, View, ScrollView } from "react-native";
import Balance from "../components/home/Balance";
import TransferHistory from "../components/home/TransferHistory";
import { homeStyle } from "../style/HomeStyle";
import { useState, useEffect, useContext } from "react";
import { axiosInstance } from "../config/axiosInstance";
import UserContext from "../context/userContext";

const Home = () => {
  const [balance, setBalance] = useState(null);
  const [transferHistory, setTransferHistory] = useState([]);
  const [detail, setDetail] = useState({ visible: false, data: {} });

  const user = useContext(UserContext);

  const getBalance = async () => {
    try {
      const response = await axiosInstance.get(`/balance/${user.id}`);
      const { balanceAmount } = response.data;
      setBalance(balanceAmount);
    } catch (error) {
      console.error(error);
    }
  };

  const getTransferHistory = async () => {
    try {
      const response = await axiosInstance.get(
        `/transactions/${user.id}?limit=15&page=1`
      );
      const { transactions } = response.data;
      setTransferHistory(transactions);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBalance();
    getTransferHistory();
  }, []);

  return (
    <ScrollView style={homeStyle.container}>
      {!detail.visible ? <Balance balance={balance} /> : null}
      <TransferHistory
        transferHistory={transferHistory}
        setDetail={setDetail}
        detail={detail}
      />
    </ScrollView>
  );
};

export default Home;
