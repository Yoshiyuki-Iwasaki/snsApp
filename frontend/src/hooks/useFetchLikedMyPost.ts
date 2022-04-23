import { useState, useEffect } from "react";
import FavoriteApi from "../api/Favorite/api";

const useFetchLikedMyPost = (id: number) => {
  const [likedPost, setLikedPost] = useState<any>([]);

  useEffect(() => {
    const fetchLikedPost = async () => {
      const FavoriteRes = await FavoriteApi.fetch_userTodo(id);
      setLikedPost(FavoriteRes);
    };
    fetchLikedPost();
  }, []);

  return likedPost;
};

export default useFetchLikedMyPost;
