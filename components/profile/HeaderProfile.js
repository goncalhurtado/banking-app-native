import React from "react";
import { List, Avatar } from "react-native-paper";
import { setInitials } from "../../helpers/fromatInfo";

const HeaderProfile = ({ user }) => {
  const { name, lastname, email, cvu, alias } = user;
  const initials = setInitials(`${name} ${lastname}`);
  return (
    <List.Item
      title={`${name} ${lastname}`}
      description="Ver mis datos"
      left={(props) => (
        <Avatar.Text
          style={{ alignSelf: "center" }}
          size={35}
          label={initials}
        />
      )}
    />
  );
};

export default HeaderProfile;
