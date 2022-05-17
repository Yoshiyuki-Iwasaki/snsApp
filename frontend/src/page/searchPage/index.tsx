import React, { useEffect, useState } from 'react';
import Presenter from './presenter';
import { useParams } from 'react-router-dom';
import PostApi from '../../api/Post/api';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const SearchPage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState<any>();
  const { myUser } = useFetchMyUser();

  const fetchSearchFunction = async () => {
    const postRes = await PostApi.search(id);
    setPosts(postRes.data);
  };

  useEffect(() => {
    fetchSearchFunction();
  }, [id]);

  return <Presenter id={Number(id)} myUser={myUser} posts={posts} />;
};

export default SearchPage;
