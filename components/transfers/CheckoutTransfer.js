import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { checkout } from "../../style/TransfersStyle";
import { useNavigate } from "react-router-native";

const CheckoutTransfer = ({ data }) => {
  const { destinationName, destinationLastname } = data;
  const [state, setState] = useState(1);

  const fullname = `${data.destinationName} ${data.destinationLastname}`;

  const navigate = useNavigate();

  const handlePress = () => {
    navigate("/");
  };

  return (
    <View style={checkout.container}>
      <View style={checkout.iconCont}>
        <Icon style={checkout.icon} name="check" size={25} color="#6200EE" />
      </View>
      <Text style={checkout.title}>Transferencia exitosa</Text>
      <Text style={checkout.subtitle}>
        Le enviaste ${data.amount} a {fullname}
      </Text>
      <TouchableOpacity onPress={handlePress}>
        <View style={checkout.btn}>
          <Text style={{ color: "white" }}>Volver al Inicio</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CheckoutTransfer;
