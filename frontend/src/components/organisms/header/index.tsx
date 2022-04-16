import React, { useEffect, FC } from "react";
import Presenter from "./presenter";
import { useNavigate } from "react-router-dom";

const Header: FC<any> = ({ user, setUser, fetchUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUser("");
    navigate("/");
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Presenter
      user={user}
      setUser={setUser}
      fetchUser={fetchUser}
      handleLogout={handleLogout}
    />
  );
};

export default Header;
