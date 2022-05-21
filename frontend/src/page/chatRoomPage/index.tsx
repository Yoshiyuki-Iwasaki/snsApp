import React from 'react';
import Presenter from './presenter';
import { useParams } from 'react-router-dom';
import useHandleInputChange from '../../hooks/useHandleInputChange';
import { useAddChat } from './hooks';
import useFetchChat from '../../hooks/useFetchChat';
import { initialChatState } from '../../util/state';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const ChatRoomPage = () => {
  const { myUser } = useFetchMyUser();
  const { id } = useParams();
  const { inputChange, handleInputChange } =
    useHandleInputChange(initialChatState);
  const addChat = useAddChat(inputChange, Number(id));
  const { chats } = useFetchChat(Number(id));

  return (
    <Presenter
      myUser={myUser}
      chats={chats}
      inputChange={inputChange}
      addChat={(e) => addChat(e)}
      handleInputChange={handleInputChange}
    />
  );
};

export default ChatRoomPage;
