import { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import UserContext from "../context/userContext";
import { axiosInstance } from "../config/axiosInstance";
import { useNavigate } from "react-router-native";

function Login() {
  const { setUser, user } = useContext(UserContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/login", { email, password });
      setLoading(false);

      setUser(response.data.user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        style={{ marginBottom: 16 }}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        mode="outlined"
        secureTextEntry
        style={{ marginBottom: 16 }}
      />

      <Button mode="contained" onPress={handleLogin} loading={loading}>
        Login
      </Button>
    </View>
  );
}

export default Login;
