import { useState, useEffect } from 'react';
import PostApi from '../api/Post/api';
import { useParams } from 'react-router-dom';

// 現在開いているPostを取得するcustom hooks.
const useFetchPostData = (inputChange?: any, setInputChange?: any) => {
  const params = useParams();
  const initialPostState = {
    id: null,
    name: '',
    createdAt: '',
  };
  const [currentPost, setCurrentPost] = useState<any>(initialPostState);
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

export default useFetchPostData;
