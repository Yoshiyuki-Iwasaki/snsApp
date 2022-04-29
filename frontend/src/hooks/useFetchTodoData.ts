import { useState, useEffect } from "react";
import TodoApi from "../api/Todo/api";
import { useParams } from "react-router-dom";

const useFetchTodoData = (initialTodoState, id) => {
  const params = useParams();
  const [currentTodo, setCurrentTodo] = useState<any>(initialTodoState);
  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const todoRes = await TodoApi.show(id);
        setCurrentTodo(todoRes.data);
        console.log("todoRes", todoRes);
      } catch (e: any) {
        console.log(e);
      }
    };

    fetchTodoData();
    console.log("currentTodo", currentTodo);
    console.log("Number(params.id)", Number(params.id));
  }, []);

  return currentTodo;
};

export default useFetchTodoData;
