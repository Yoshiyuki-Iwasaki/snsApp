import React, { useEffect, FC } from "react";
import { Link } from "react-router-dom";
import useFetchUser from "../../../hooks/useFetchUser";
import { NavBar, Inner, Logo, NavItems, NavItem } from "./style";

const Presenter: FC = () => {
  const { users } = useFetchUser();

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
          <NavItem>
            <Link to="/new">新規投稿</Link>
          </NavItem>
        </NavItems>
        {users ? (
          <p>{users.name}</p>
        ) : (
          <>
            <p>ログイン</p>
            <p>新規登録</p>
          </>
        )}
      </Inner>
    </NavBar>
  );
};

export default Presenter;
