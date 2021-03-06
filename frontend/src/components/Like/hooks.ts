import { useState, useEffect } from 'react';
import { notify } from '../../util/notify';
import FavoriteApi from '../../api/Favorite/api';
import NotificationApi from '../../api/Notification/api';
import useFetchMyUser from '../../hooks/useFetchMyUser';

// いいね削除機能のcustom hooks.
export const useHandleUnlike = (favorite, fetchFavorite) => {
  const handleUnlike = async () => {
    await FavoriteApi.remove(favorite.favoriteData[0].id);
    notify('正常にいいね削除完了しました。');
    fetchFavorite();
  };

  return handleUnlike;
};

// いいね機能のcustom hooks.
export const useHandleLike = (
  val,
  myUser,
  fetchFavorite,
  replyFrag: boolean
) => {
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
    await NotificationApi.create(notificationData);
    notify('正常にいいねが完了しました。');
    fetchFavorite();
  };

  return handleLike;
};

// いいね取得機能のcustom hooks.
export const useFetchFavorite = (val, replyFrag) => {
  const [favorite, setFavorite] = useState<any>();
  const { myUser } = useFetchMyUser();

  const fetchFavorite = async () => {
    try {
      const FavoriteRes = replyFrag
        ? await FavoriteApi.fetch_replyPost(myUser.data.id, val.id)
        : await FavoriteApi.fetch(myUser.data.id, val.id);
      setFavorite(FavoriteRes.data);
      console.log('FavoriteRes.data', FavoriteRes.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    myUser && fetchFavorite();
  }, [myUser]);

  return { favorite, fetchFavorite };
};
