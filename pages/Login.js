// import { useContext, useState } from "react";
// import { View } from "react-native";
// import { Button, TextInput } from "react-native-paper";
// import UserContext from "../context/userContext";
// import { axiosInstance } from "../config/axiosInstance";

// function Login() {
//   const { setUser } = useContext(UserContext);

//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//   });

//   const [setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     setInput({ email, password });
//     try {
//       const response = await axiosInstance.post("/login", input);
//       //   setUser(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
//       <TextInput
//         label="Email"
//         value={email}
//         onChangeText={setEmail}
//         mode="outlined"
//         autoCapitalize="none"
//         autoCompleteType="email"
//         textContentType="emailAddress"
//         keyboardType="email-address"
//         style={{ marginBottom: 16 }}
//       />

//       <TextInput
//         label="Password"
//         value={password}
//         onChangeText={setPassword}
//         mode="outlined"
//         secureTextEntry
//         style={{ marginBottom: 16 }}
//       />

//       <Button mode="contained" onPress={handleLogin}>
//         Login
//       </Button>
//     </View>
//   );
// }

// export default Login;
