import { useState, useEffect } from 'react';
import PostApi from '../api/Post/api';

// 自分が投稿したPostを取得するcustom hooks.
const useFetchMyPost = (id: number) => {
  const [myPost, setMyPost] = useState<any>();

  useEffect(() => {
    const fetchMyPost = async () => {
      const PostRes = await PostApi.fetch_userPost(id);
      setMyPost(PostRes.data);
    };
    fetchMyPost();
  }, []);

  return myPost;
};

export default useFetchMyPost;
