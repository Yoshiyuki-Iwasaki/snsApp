import { notify } from '../util/notify';
import FavoriteApi from '../api/Favorite/api';
import NotificationApi from '../api/Notification/api';

// いいね処理をするcustom hooks.
export const useHandleLike = (val, myUser, fetchFavorite, replyFrag) => {
  const handleLike = async () => {
    const data = {
      post_id: replyFrag ? '' : val.id,
      user_id: myUser && myUser.data.id,
      reply_id: replyFrag ? val.id : '',
    };
    await FavoriteApi.create(data);
    const notificationData = {
      visiter_id: myUser && myUser.data.id,
      visited_id: val.user.id,
      post_id: replyFrag ? null : val.id,
      reply_id: replyFrag ? val.id : null,
      type: 'like',
      checked: false,
    };
    try {
      await NotificationApi.create(notificationData);
      notify('正常にいいねが完了しました。');
      fetchFavorite();
    } catch (e: any) {
      console.log(e);
    }
  };

  return handleLike;
};
