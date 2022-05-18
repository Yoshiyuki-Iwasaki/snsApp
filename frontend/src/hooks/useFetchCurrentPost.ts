import { useState, useEffect } from 'react';
import PostApi from '../api/Post/api';
import { useParams } from 'react-router-dom';
import { initialEditPostState } from '../util/state';

// 現在開いているPostを取得するcustom hooks.
const useFetchCurrentPost = (inputChange?: any, setInputChange?: any) => {
  const params = useParams();
  const [currentPost, setCurrentPost] = useState<any>(initialEditPostState);
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const postRes = await PostApi.show(Number(params.id));
        inputChange
          ? setInputChange(postRes.data)
          : setCurrentPost(postRes.data);
      } catch (e: any) {
        console.log(e);
      }
    };

    fetchPostData();
  }, []);

  return inputChange ? { inputChange, setInputChange } : currentPost;
};

export default useFetchCurrentPost;
