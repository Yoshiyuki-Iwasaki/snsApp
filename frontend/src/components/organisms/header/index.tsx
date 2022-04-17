import React, { FC } from "react";
import Presenter from "./presenter";
import { useNavigate } from "react-router-dom";
import { HeaderType } from "./type";

const Header: FC<HeaderType> = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUser("");
    navigate("/");
  };

  return <Presenter user={user} handleLogout={handleLogout} />;
};

export default Header;
