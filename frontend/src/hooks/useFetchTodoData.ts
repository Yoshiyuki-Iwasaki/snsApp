import { useState, useEffect } from "react";
import TodoApi from "../api/Todo/api";

const useFetchTodoData = (params: any) => {
  const initialTodoState = {
    id: null,
    name: "",
    createdAt: "",
  };
  const [currentTodo, setCurrentTodo] = useState<any>(initialTodoState);
  const fetchTodoData = async id => {
    const todoRes = await TodoApi.fetch_detail(id);
    setCurrentTodo(todoRes.data);
  };

  useEffect(() => {
    fetchTodoData(Number(params.id));
  }, []);

  return currentTodo;
};

export default useFetchTodoData;
