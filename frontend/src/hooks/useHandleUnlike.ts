import { notify } from "../util/notify";
import FavoriteApi from "../api/Favorite/api";

const useHandleUnlike = (favorite, fetchFavorite) => {
  const handleUnlike = async () => {
    await FavoriteApi.remove(favorite.data.favorite[0].id);
    notify("正常にいいね削除完了しました。");
    fetchFavorite();
  };

  return handleUnlike;
};

export default useHandleUnlike;
