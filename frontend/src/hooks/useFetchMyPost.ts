import { useState, useEffect } from 'react';
import TodoApi from '../api/Todo/api';

const useFetchMyPost = (id: number) => {
  const [myPost, setMyPost] = useState<any>();

  useEffect(() => {
    const fetchMyPost = async () => {
      const TodoRes = await TodoApi.fetch_userTodo(id);
      setMyPost(TodoRes.data);
    };
    fetchMyPost();
  }, []);

  return myPost;
};

export default useFetchMyPost;
