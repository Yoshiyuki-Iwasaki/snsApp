import { useState, useEffect } from "react";
import TodoApi from "../api/Todo/api";

const useFetchAllTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const todoRes = await TodoApi.fetch();
      setTodos(todoRes.data);
    };
    fetchTodo();
  }, []);

  return todos;
};

export default useFetchAllTodos;
