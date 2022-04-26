import React, { FC } from "react";
import Presenter from "./presenter";
import { useNavigate } from "react-router-dom";
import { HeaderType } from "./type";
import UserApi from "../../../api/User/api";
import useFetchMyUser from "../../../hooks/useFetchMyUser";
const Header: FC<HeaderType> = () => {
  const navigate = useNavigate();
  const { myUser, setMyUser } = useFetchMyUser();

  const handleLogout = async () => {
    await UserApi.logout();
    setMyUser("");
    navigate("/");
  };

  return <Presenter myUser={myUser} handleLogout={handleLogout} />;
};

export default Header;
