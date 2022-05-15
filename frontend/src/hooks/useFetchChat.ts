import { useState, useEffect, useCallback } from 'react';
import ChatApi from '../api/Chat/api';
import useFetchMyUser from './useFetchMyUser';

// 自分が投稿したChatを取得するcustom hooks.
const useFetchChat = (id) => {
  const { myUser } = useFetchMyUser();
  const [chats, setChats] = useState<any>();
  const fetchChat = async () => {
    const ChatRes = await ChatApi.fetch(Number(id));
    setChats(ChatRes.data);
  };

  useEffect(() => {
    myUser && fetchChat();
  }, [myUser]);

  return { fetchChat, chats };
};

export default useFetchChat;
