import { useState, useEffect } from "react";
import FavoriteApi from "../api/Favorite/api";

const useFetchFavorite = (myuser, val) => {
  const [favorite, setFavorite] = useState<any>();

  useEffect(() => {
    const fetchFavorite = async () => {
      const FavoriteRes = await FavoriteApi.fetch(myuser.id, val.id);
      setFavorite(FavoriteRes);
    };
    fetchFavorite();
  }, []);

  return favorite;
};

export default useFetchFavorite;
