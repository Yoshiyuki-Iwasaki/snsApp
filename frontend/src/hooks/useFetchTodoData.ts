import { useState, useEffect } from "react";
import TodoApi from "../api/Todo/api";

const useFetchTodoData = (params: any) => {
  const initialTodoState = {
    id: null,
    name: "",
    createdAt: "",
  };
  const [currentTodo, setCurrentTodo] = useState<any>(initialTodoState);
  useEffect(() => {
    const fetchTodoData = async id => {
      const todoRes = await TodoApi.fetch_detail(id);
      setCurrentTodo(todoRes.data);
      console.log("todoRes", todoRes);
    };

    fetchTodoData(Number(params.id));
    console.log("currentTodo", currentTodo);
    console.log("Number(params.id)", Number(params.id));
  }, []);

  return currentTodo;
};

export default useFetchTodoData;
