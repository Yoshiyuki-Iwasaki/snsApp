import React from 'react';
import Presenter from './presenter';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const ChatPage = () => {
  const { myUser } = useFetchMyUser();

  return <Presenter />;
};

export default ChatPage;
