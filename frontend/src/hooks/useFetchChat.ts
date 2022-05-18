import { useState, useEffect, useCallback } from 'react';
import ChatApi from '../api/Chat/api';
import UserApi from '../api/User/api';
import useFetchMyUser from './useFetchMyUser';

// 自分が投稿したChatを取得するcustom hooks.
const useFetchChat = (id) => {
  const { myUser } = useFetchMyUser();
  const [chats, setChats] = useState<any>();
  const [chatRoomMember, setChatRoomMember] = useState<any>();

  const fetchChat = async () => {
    try {
      const ChatRes = await ChatApi.fetch(Number(id));
      const roomMember = await UserApi.fetchUserRoomMember(Number(id));
      //自分ではないチャットのメンバーを取得
      const yourRoomMember = roomMember.data.filter((val) => {
        return val.user.id !== myUser.data.id;
      });

      setChatRoomMember(yourRoomMember[0]);
      setChats(ChatRes.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    myUser && fetchChat();
  }, [myUser]);

  return { fetchChat, chats, chatRoomMember };
};

export default useFetchChat;
