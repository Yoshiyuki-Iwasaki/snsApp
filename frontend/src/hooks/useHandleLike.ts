import { notify } from '../util/notify';
import FavoriteApi from '../api/Favorite/api';

// いいね処理をするcustom hooks.
const useHandleLike = (val, myUser, fetchFavorite, detailPageFrag) => {
  const handleLike = async () => {
    const data = {
      todo_id: detailPageFrag ? '' : val.id,
      user_id: myUser && myUser.data.id,
      reply_id: detailPageFrag ? val.id : '',
    };
    await FavoriteApi.create(data);
    notify('正常にいいねが完了しました。');
    fetchFavorite();
  };

  return handleLike;
};

export default useHandleLike;
