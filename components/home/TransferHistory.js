import { Text, View, TouchableOpacity } from "react-native";
import { transferHistoryStyle } from "../../style/HomeStyle";
import UserContext from "../../context/userContext";
import { useContext, useState } from "react";
import TransferItem from "./TransferItem";
import TransferDetail from "./TransferDetail";
import { set } from "date-fns";

function TransferHistory({ transferHistory, setDetail, detail }) {
  const { user } = useContext(UserContext);

  const seeDetails = (transfer) => {
    setDetail({
      visible: true,
      data: transfer,
    });
  };

  return (
    <View>
      {!detail.visible ? (
        <>
          <Text style={transferHistoryStyle.title}>Movimientos</Text>
          <View style={transferHistoryStyle.container}>
            {transferHistory.map((transfer, index) => (
              <TouchableOpacity
                onPress={() => seeDetails(transfer)}
                key={index}
              >
                <TransferItem transfer={transfer} user={user} />
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        <TransferDetail transfer={detail} setDetail={setDetail} />
      )}
    </View>
  );
}

export default TransferHistory;
