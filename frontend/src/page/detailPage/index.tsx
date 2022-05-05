import React from 'react';
import Presenter from './presenter';
import { useParams } from 'react-router-dom';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import useFetchReply from '../../hooks/useFetchReply';
import useFetchCurrentTodo from '../../hooks/useFetchCurrentTodo';
import useAddReply from '../../hooks/useAddReply';
import useDeleteTodo from '../../hooks/useDeleteTodo';
import useModalOpen from '../../hooks/useModalOpen';

const DetailPage = () => {
  const { myUser } = useFetchMyUser();
  const { id } = useParams();
  const initialReplyState = {
    id: null,
    name: '',
    user_id: '',
    todo_id: '',
    createdAt: '',
  };
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialReplyState);
  const { replies, fetchReply } = useFetchReply();
  const currentTodo = useFetchCurrentTodo();
  const addReply = useAddReply(inputChange, { id }, fetchReply, currentTodo);
  const deleteTodo = useDeleteTodo({ id });
  const { modalOpenFrag, handleModal } = useModalOpen();

  return (
    <Presenter
      currentTodo={currentTodo}
      myUser={myUser}
      reply={inputChange}
      replies={replies}
      modalOpenFrag={modalOpenFrag}
      deleteTodo={deleteTodo}
      handleModal={handleModal}
      handleInputChange={handleInputChange}
      addReply={addReply}
    />
  );
};

export default DetailPage;
