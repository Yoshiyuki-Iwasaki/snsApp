import { useState } from 'react';
import TodoApi from '../api/Todo/api';
import { TodosType } from '../type/Todos';

// Todoを取得するcustom hooks.
const useFetchAllTodos = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true); //再読み込み判定
  const [todos, setTodos] = useState<TodosType[]>([]);

  const fetchTodo = async (page) => {
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
