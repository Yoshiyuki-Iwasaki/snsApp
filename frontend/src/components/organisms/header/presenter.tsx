import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavBar, Inner, Logo, NavItems, NavItem } from "./style";

const Presenter: FC<any> = ({ user, handleLogout }) => {
  return (
    <NavBar>
      <Inner>
        <Link to="/">
          <Logo>TODO LIST</Logo>
        </Link>
        <NavItems>
          {user ? (
            <>
              <NavItem>
                <Link to={`/user/${user.id}`}>{user.name}</Link>
              </NavItem>
              <NavItem>
                <Link to="/new">新規投稿</Link>
              </NavItem>
              <NavItem onClick={handleLogout}>ログアウト</NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <Link to="/signin">ログイン</Link>
              </NavItem>
              <NavItem>
                <Link to="/signup">新規登録</Link>
              </NavItem>
            </>
          )}
        </NavItems>
      </Inner>
    </NavBar>
  );
};

export default Presenter;
