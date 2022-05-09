import { useState, useEffect } from 'react';
import FavoriteApi from '../api/Favorite/api';

// いいねしたPostを取得するcustom hooks.
const useFetchLikedMyPost = (id: number) => {
  const [likedPost, setLikedPost] = useState<any>([]);

  useEffect(() => {
    const fetchLikedPost = async () => {
      const FavoriteRes = await FavoriteApi.fetch_userPost(id);
      setLikedPost(FavoriteRes.data);
    };
    fetchLikedPost();
  }, []);

  return likedPost;
};

export default useFetchLikedMyPost;
