import { useState, useEffect } from "react";
import TodoApi from "../api/Todo/api";

const useFetchAllTodos = pageNumber => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const todoRes = await TodoApi.fetch(pageNumber);
      setTodos(todoRes.data);
    };
    fetchTodo();
  }, []);

  return todos;
};

export default useFetchAllTodos;
