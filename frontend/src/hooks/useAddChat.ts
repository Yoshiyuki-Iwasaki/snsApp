import { notify } from '../util/notify';
import useFetchMyUser from './useFetchMyUser';
import useFetchChat from '../hooks/useFetchChat';
import ChatApi from '../api/Chat/api';
import NotificationApi from '../api/Notification/api';

// Chat作成処理をするcustom hooks.
const useAddChat = (inputChange, id) => {
  const { myUser } = useFetchMyUser();
  const { chatRoomMember } = useFetchChat(id);

  const addChat = async () => {
    const data = {
      id: null,
      user_id: myUser.data.id,
      room_id: Number(id),
      message: inputChange.content,
    };
    const notificationData = {
      url: chatRoomMember.room.id,
      visiter_id: myUser.data.id,
      visited_id: chatRoomMember.user.id,
      post_id: null,
      type: 'chat',
      checked: false,
    };
    try {
      await ChatApi.create(data);
      await NotificationApi.create(notificationData);
      notify('正常にChatが投稿されました。');
      window.location.reload();
    } catch (e: any) {
      console.log(e);
    }
  };

  return addChat;
};

export default useAddChat;
