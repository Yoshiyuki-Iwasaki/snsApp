import React, { useState, FC } from "react";
import Presenter from "./presenter";
import useFetchAllTodos from "../../hooks/useFetchAllTodos";
import useFetchMyUser from "../../hooks/useFetchMyUser";

const TopPage: FC = () => {
  const [searchName, setSearchName] = useState("");
  const todos = useFetchAllTodos();
  const { myUser } = useFetchMyUser();

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
