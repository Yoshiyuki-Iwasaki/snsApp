import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Presenter from './presenter';
import { useFetchMyPost } from '../../components/profile/hooks';
import { useFetchLikedMyPost } from '../../components/profile/hooks';
import useFetchMyUser from '../../hooks/useFetchMyUser';

const UserPage: FC = () => {
  const { id } = useParams();
  const myPost = useFetchMyPost(Number(id));
  const likedPost = useFetchLikedMyPost(Number(id));
  const { myUser } = useFetchMyUser();

  return <Presenter myUser={myUser} myPost={myPost} likedPost={likedPost} />;
};

export default UserPage;
