import { useState, useEffect } from "react";
import TodoApi from "../api/Todo/api";

const useFetchAllTodos = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true); //再読み込み判定
  const [todos, setTodos] = useState<any[]>([]);

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

  return { todos, fetchTodo, hasMore, isFetching };
};

export default useFetchAllTodos;
