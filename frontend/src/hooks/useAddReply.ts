import { notify } from '../util/notify';
import useFetchMyUser from './useFetchMyUser';
import ReplyApi from '../api/Reply/api';
import NotificationApi from '../api/Notification/api';

// Reply作成処理をするcustom hooks.
const useAddReply = (inputChange, params, currentPost) => {
  const { myUser } = useFetchMyUser();
  const addReply = async () => {
    const data = {
      post_id: Number(params.id),
      content: inputChange.content,
      user_id: myUser.data.id,
    };
    const notificationData = {
      visiter_id: myUser && myUser.data.id,
      visited_id: currentPost.user.id,
      post_id: Number(params.id),
      type: 'reply',
      checked: false,
    };
    try {
      await ReplyApi.create(data);
      await NotificationApi.create(notificationData);
      window.location.reload();
      notify('正常にリプライが完了しました。');
    } catch (e: any) {
      console.log(e);
    }
  };

  return addReply;
};

export default useAddReply;
