import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavBar, Inner, Logo, NavItems, NavItem } from "./style";

const Presenter: FC = () => {
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
      </Inner>
    </NavBar>
  );
};

export default Presenter;
