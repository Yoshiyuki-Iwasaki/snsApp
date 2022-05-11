import { useState, useEffect, useCallback } from 'react';
import PostApi from '../api/Post/api';

// 自分が投稿したPostを取得するcustom hooks.
const useFetchMyPost = (id: number) => {
  const [myPost, setMyPost] = useState<any>();
  const fetchMyPost = useCallback(async () => {
    const PostRes = await PostApi.fetch_userPost(id);
    setMyPost(PostRes.data);
  }, [id]);

  useEffect(() => {
    fetchMyPost();
  }, [id, fetchMyPost]);

  return myPost;
};

export default useFetchMyPost;
