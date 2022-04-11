import React, { useEffect, FC } from "react";
import { Link } from "react-router-dom";
import useFetchUser from "../../../hooks/useFetchUser";
import { NavBar, Inner, Logo, NavItems, NavItem } from "./style";

const Presenter: FC = () => {
  const { users } = useFetchUser();
  const handleLogout = () => {
    localStorage.removeItem("userId");
    setUser("");
  };

  useEffect(() => {
    console.log("users", users);
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
        )}
      </Inner>
    </NavBar>
  );
};

export default Presenter;
