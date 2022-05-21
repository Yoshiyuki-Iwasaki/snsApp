import React, { useEffect, useState } from 'react';
import Presenter from './presenter';
import { useParams } from 'react-router-dom';
import PostApi from '../../api/Post/api';
import UserApi from '../../api/User/api';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const SearchPage = () => {
  const { id } = useParams();
  const { myUser } = useFetchMyUser();
  const [posts, setPosts] = useState<any>();
  const [users, setUsers] = useState<any>();

  const fetchSearchFunction = async () => {
    const postRes = await PostApi.search(id);
    const userRes = await UserApi.search(id);
    setPosts(postRes.data);
    setUsers(userRes.data);
  };

  useEffect(() => {
    fetchSearchFunction();
  }, [id]);

  return <Presenter id={id} myUser={myUser} posts={posts} users={users} />;
};

export default SearchPage;
