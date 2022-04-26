import { useState, useEffect } from "react";
import FavoriteApi from "../api/Favorite/api";
import useFetchUser from "./useFetchUser";

const useFetchFavorite = val => {
  const [favorite, setFavorite] = useState<any>();
  const { myUser } = useFetchUser();

  const fetchFavorite = async () => {
    const FavoriteRes = await FavoriteApi.fetch(myUser.data.id, val.id);
    setFavorite(FavoriteRes);
  };

  useEffect(() => {
    myUser && fetchFavorite();
    console.log("test");
  }, [myUser]);

  return { favorite, fetchFavorite };
};

export default useFetchFavorite;
