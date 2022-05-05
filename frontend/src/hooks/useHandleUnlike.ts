import { notify } from '../util/notify';
import FavoriteApi from '../api/Favorite/api';

// いいね削除処理をするcustom hooks.
const useHandleUnlike = (favorite, fetchFavorite) => {
  const handleUnlike = async () => {
    await FavoriteApi.remove(favorite.favorite[0].id);
    notify('正常にいいね削除完了しました。');
    fetchFavorite();
  };

  return handleUnlike;
};

export default useHandleUnlike;
