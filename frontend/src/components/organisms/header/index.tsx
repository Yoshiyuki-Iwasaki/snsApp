import React, { FC } from "react";
import Presenter from "./presenter";
import { useNavigate } from "react-router-dom";
import { HeaderType } from "./type";
import UserApi from "../../../api/User/api";

const Header: FC<HeaderType> = ({ myUser, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await UserApi.logout();
    setUser("");
    navigate("/");
  };

  return <Presenter myUser={myUser} handleLogout={handleLogout} />;
};

export default Header;
