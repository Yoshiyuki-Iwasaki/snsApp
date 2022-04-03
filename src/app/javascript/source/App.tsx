import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "ress";
import "./App.css";

const NavBar = styled.nav``;
const Inner = styled.div`
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;
const Logo = styled.div``;
const NavItems = styled.ul`
  display: flex;
`;
const NavItem = styled.li`
  padding: 0 10px;
`;

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
