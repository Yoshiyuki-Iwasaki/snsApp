import { useState } from 'react';
import PostApi from '../../api/Post/api';
import { PostsType } from '../../type/Posts';

// Postを取得するcustom hooks.
export const useFetchAllPosts = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true); //再読み込み判定
  const [posts, setPosts] = useState<PostsType[]>([]);

  const fetchPost = async (page) => {
    try {
      setIsFetching(true);
      {
        const postRes = await PostApi.fetch(page);
        //データ件数が0件の場合、処理終了
        if (postRes.data.length < 1) {
          setHasMore(false);
          return;
        }
        setPosts([...posts, ...postRes.data]);
      }
    } catch (e: any) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  return { posts, fetchPost, hasMore, isFetching };
};
