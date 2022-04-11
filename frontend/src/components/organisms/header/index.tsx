import React, { FC } from "react";
import Presenter from "./presenter";

const Header: FC<any> = ({ user, setUser, fetchUser }) => {
  return <Presenter user={user} setUser={setUser} fetchUser={fetchUser} />;
};

export default Header;
