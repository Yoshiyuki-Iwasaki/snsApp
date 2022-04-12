import React, { useState, useEffect, FC } from "react";
import { Link } from "react-router-dom";
import { NavBar, Inner, Logo, NavItems, NavItem } from "./style";
import UserApi from "../../../api/User/api";
import { useNavigate } from "react-router-dom";

const Presenter: FC<any> = ({ user, setUser, fetchUser }) => {
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
    <NavBar>
      <Inner>
        <Link to="/">
          <Logo>TODO LIST</Logo>
        </Link>
        <NavItems>
          {user ? (
            <NavItem>
              <NavItem>{user.name}</NavItem>
              <NavItem>
                <Link to="/new">新規投稿</Link>
              </NavItem>
              <NavItem onClick={handleLogout}>ログアウト</NavItem>
            </NavItem>
          ) : (
            <NavItem>
              <NavItem>
                <Link to="/signin">ログイン</Link>
              </NavItem>
              <NavItem>
                <Link to="/signup">新規登録</Link>
              </NavItem>
            </NavItem>
          )}
        </NavItems>
      </Inner>
    </NavBar>
  );
};

export default Presenter;
