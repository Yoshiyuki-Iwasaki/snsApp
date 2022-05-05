import { notify } from '../util/notify';
import FavoriteApi from '../api/Favorite/api';
import NotificationApi from '../api/Notification/api';

// いいね処理をするcustom hooks.
const useHandleLike = (val, myUser, fetchFavorite, replyFrag) => {
  const handleLike = async () => {
    const data = {
      todo_id: replyFrag ? '' : val.id,
      user_id: myUser && myUser.data.id,
      reply_id: replyFrag ? val.id : '',
    };
    await FavoriteApi.create(data);
    const notificationData = {
      visiter_id: myUser && myUser.data.id,
      visited_id: val.user.id,
      todo_id: replyFrag ? null : val.id,
      reply_id: replyFrag ? val.id : null,
      type: 'like',
      checked: false,
    };
    await NotificationApi.create(notificationData);
    notify('正常にいいねが完了しました。');
    fetchFavorite();
  };

  return handleLike;
};

export default useHandleLike;
