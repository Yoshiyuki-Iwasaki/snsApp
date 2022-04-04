import React, { FC } from "react";
import { Link } from "react-router-dom";
import { NavBar, Inner, Logo, NavItems, NavItem } from "./style";

const Header: FC = () => {
  return (
    <NavBar>
      <Inner>
        <Logo>TODO</Logo>
        <NavItems>
          <NavItem>
            <Link to="/todos">Todos</Link>
          </NavItem>
          <NavItem>
            <Link to="/todos/new">新規投稿</Link>
          </NavItem>
        </NavItems>
      </Inner>
    </NavBar>
  );
};

export default Header;
