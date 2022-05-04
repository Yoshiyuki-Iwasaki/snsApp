import { useState, useEffect } from 'react';
import FavoriteApi from '../api/Favorite/api';
import useFetchMyUser from './useFetchMyUser';

// Favoriteを取得するcustom hooks.
const useFetchFavorite = (val, detailPageFrag) => {
  const [favorite, setFavorite] = useState<any>();
  const { myUser } = useFetchMyUser();

  const fetchFavorite = async () => {
    const FavoriteRes = detailPageFrag
      ? await FavoriteApi.fetch_replyTodo(myUser.data.id, val.id)
      : await FavoriteApi.fetch(myUser.data.id, val.id);
    setFavorite(FavoriteRes.data);
  };

  useEffect(() => {
    myUser && fetchFavorite();
  }, [myUser]);

  return { favorite, fetchFavorite };
};

export default useFetchFavorite;
