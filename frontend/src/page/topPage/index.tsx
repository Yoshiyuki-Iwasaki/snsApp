import React, { useState, useEffect, FC } from "react";
import Presenter from "./presenter";
import useFetchAllTodos from "../../hooks/useFetchAllTodos";
import useFetchMyUser from "../../hooks/useFetchMyUser";
import TodoApi from "../../api/Todo/api";

let pageNumber: number = 1;

const TopPage: FC = () => {
  const [searchName, setSearchName] = useState("");
  const { myUser } = useFetchMyUser();
  const [todos, setTodos] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true); //再読み込み判定
  const [isFetching, setIsFetching] = useState(false);

  const fetchTodo = async page => {
    try {
      setIsFetching(true);
      {
        const todoRes = await TodoApi.fetch(page);
        //データ件数が0件の場合、処理終了
        if (todoRes.data.length < 1) {
          setHasMore(false);
          return;
        }
        setTodos([...todos, ...todoRes.data]);
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <Presenter
      todos={todos}
      user={myUser}
      searchName={searchName}
      setSearchName={setSearchName}
      hasMore={hasMore}
      isFetching={isFetching}
      fetchTodo={fetchTodo}
    />
  );
};

export default TopPage;
