import React, { useState, useEffect } from "react";
import TodoApi from "../../api/Todo/api";
import Presenter from "./presenter";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const params = useParams();
  const initialTodoState = {
    id: null,
    name: "",
    createdAt: "",
  };
  const [currentTodo, setCurrentTodo] = useState(initialTodoState);

  const fetchTodoData = async id => {
    const todoRes = await TodoApi.fetch_detail(id);
    setCurrentTodo(todoRes.data);
  };

  useEffect(() => {
    fetchTodoData(params.id);
  }, []);

  return <Presenter params={params} currentTodo={currentTodo} />;
};

export default DetailPage;
