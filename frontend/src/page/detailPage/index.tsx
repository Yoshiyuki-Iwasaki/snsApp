import React, { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { EditButton } from "./style";
import { useParams } from "react-router-dom";
import TodoApi from "../../api/Todo/api";
import { formatDate } from "../../util/data";
import Label from "../../components/atoms/label";

const DetailPage = () => {
  const params = useParams();
  const initialTodoState = {
    id: null,
    name: "",
    completed: false,
    createdAt: "",
  };
  const [currentTodo, setCurrentTodo] = useState(initialTodoState);

  const fetchTodoData = async id => {
    const todoRes = await TodoApi.fetch_detail(id);
    setCurrentTodo(todoRes.data);
  };
  useEffect(() => {
    fetchTodoData(params.id);
  }, [params.id]);
  return (
    <div>
      <Label>{formatDate(currentTodo.createdAt)}</Label>
      <Label>{currentTodo.name}</Label>
      <Link to={"/" + params.id + "/edit"}>
        <EditButton>
          <AiFillEdit />
        </EditButton>
      </Link>
    </div>
  );
};

export default DetailPage;
