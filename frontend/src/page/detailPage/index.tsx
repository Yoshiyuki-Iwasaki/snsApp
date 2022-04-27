import React from "react";
import Presenter from "./presenter";
import ReplyApi from "../../api/Reply/api";
import { notify } from "../../util/notify";
import { useParams } from "react-router-dom";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import useFetchMyUser from "../../hooks/useFetchMyUser";
import useFetchReply from "../../hooks/useFetchReply";
import useFetchTodoData from "../../hooks/useFetchTodoData";

const DetailPage = () => {
  const { myUser } = useFetchMyUser();
  const params = useParams();
  const initialReplyState = {
    id: null,
    name: "",
    user_id: "",
    todo_id: "",
    createdAt: "",
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialReplyState);
  const { replies, fetchReply } = useFetchReply(params);
  const currentTodo = useFetchTodoData(params);

  const addReply = async () => {
    const data = {
      name: inputChange.name,
      user_id: myUser.data.id,
      todo_id: Number(params.id),
    };
    await ReplyApi.create(data);
    fetchReply();
    notify("正常にリプライが完了しました。");
  };

  return (
    <Presenter
      params={params}
      currentTodo={currentTodo}
      myUser={myUser}
      reply={inputChange}
      replies={replies}
      handleInputChange={handleInputChange}
      addReply={addReply}
    />
  );
};

export default DetailPage;
