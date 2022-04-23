import React, { useState, useEffect } from "react";
import TodoApi from "../../api/Todo/api";
import Presenter from "./presenter";
import ReplyApi from "../../api/Reply/api";
import { notify } from "../../util/notify";
import { useParams } from "react-router-dom";
import useHandleInputChange from "../../hooks/useHandleInputChange";

const DetailPage = ({ myuser }) => {
  const params = useParams();
  const initialTodoState = {
    id: null,
    name: "",
    createdAt: "",
  };
  const initialReplyState = {
    id: null,
    name: "",
    user_id: "",
    todo_id: "",
    createdAt: "",
  };
  const [currentTodo, setCurrentTodo] = useState(initialTodoState);
  const [replies, setReplies] = useState<any>();
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialReplyState);

  const fetchTodoData = async id => {
    const todoRes = await TodoApi.fetch_detail(id);
    setCurrentTodo(todoRes.data);
  };

  const fetchReply = async () => {
    const ReplyRes = await ReplyApi.fetch(Number(params.id));
    setReplies(ReplyRes);
    console.log(ReplyRes);
  };

  const addReply = async () => {
    const data = {
      name: inputChange.name,
      user_id: myuser.id,
      todo_id: Number(params.id),
    };
    await ReplyApi.create(data);
    fetchReply();
    notify("正常にリプライが完了しました。");
  };

  useEffect(() => {
    fetchTodoData(params.id);
    fetchReply();
  }, []);

  return (
    <Presenter
      params={params}
      currentTodo={currentTodo}
      myuser={myuser}
      reply={inputChange}
      replies={replies}
      handleInputChange={handleInputChange}
      addReply={addReply}
    />
  );
};

export default DetailPage;
