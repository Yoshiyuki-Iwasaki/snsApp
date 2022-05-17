import React from 'react';
import Presenter from './presenter';
import { useParams } from 'react-router-dom';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import useAddChat from '../../hooks/useAddChat';
import useFetchChat from '../../hooks/useFetchChat';
import { initialChatState } from '../../util/state';

const ChatRoomPage = () => {
  const { id } = useParams();
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialChatState);
  const addChat = useAddChat(inputChange, Number(id));
  const { chats } = useFetchChat(Number(id));

  return (
    <Presenter
      chats={chats}
      inputChange={inputChange}
      addChat={addChat}
      handleInputChange={handleInputChange}
    />
  );
};

export default ChatRoomPage;
