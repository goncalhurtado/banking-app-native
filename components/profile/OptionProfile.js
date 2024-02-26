import React from "react";
import { List } from "react-native-paper";
import { useNavigate } from "react-router-native";

const OptionProfile = ({ options, setAction }) => {
  const handleNavigate = (path) => {
    setAction(path);
    // navigate(path);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <>
      {options.map((option, index) => (
        <List.Item
          key={index}
          title={option.title}
          onPress={() => {
            option.path === "" ? handleLogout : handleNavigate(option.action);
          }}
          left={() => <List.Icon icon={option.icon} />}
        />
      ))}
    </>
  );
};

export default OptionProfile;
