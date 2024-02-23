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
        `/transactions/${user.id}?limit=5&page=2`
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
      <Balance balance={balance} />
      <TransferHistory transferHistory={transferHistory} />
    </ScrollView>
  );
};

export default Home;
