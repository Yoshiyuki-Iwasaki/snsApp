import React, { useState, FC } from "react";
import Presenter from "./presenter";
import useFetchAllTodos from "../../hooks/useFetchAllTodos";
import useFetchUser from "../../hooks/useFetchUser";

const TopPage: FC = () => {
  const [searchName, setSearchName] = useState("");
  const todos = useFetchAllTodos();
  const { myUser } = useFetchUser();

  return (
    <Presenter
      todos={todos}
      user={myUser}
      searchName={searchName}
      setSearchName={setSearchName}
    />
  );
};

export default TopPage;
