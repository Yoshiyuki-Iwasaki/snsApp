import React, { useState, FC } from "react";
import Presenter from "./presenter";
import { TopPageType } from "./type";
import useFetchAllTodos from "../../hooks/useFetchAllTodos";

const TopPage: FC<TopPageType> = ({ myuser }) => {
  const [searchName, setSearchName] = useState("");
  const todos = useFetchAllTodos();

  return (
    <Presenter
      todos={todos}
      user={myuser}
      searchName={searchName}
      setSearchName={setSearchName}
    />
  );
};

export default TopPage;
