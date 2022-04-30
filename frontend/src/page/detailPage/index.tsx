import React from "react";
import Presenter from "./presenter";
import { useParams } from "react-router-dom";
import useHandleInputChange from "../../hooks/useHandleInputChange";
import useFetchMyUser from "../../hooks/useFetchMyUser";
import useFetchReply from "../../hooks/useFetchReply";
import useFetchCurrentTodo from "../../hooks/useFetchCurrentTodo";
import useAddReply from "../../hooks/useAddReply";

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
  const { replies, fetchReply } = useFetchReply();
  const currentTodo = useFetchCurrentTodo();
  const addReply = useAddReply(inputChange, params, fetchReply);

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
