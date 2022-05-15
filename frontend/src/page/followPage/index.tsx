import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useFetchFollow from '../../hooks/useFetchFollow';
import useFetchUser from '../../hooks/useFetchUser';
import { useParams } from 'react-router-dom';

const FollowPage: FC = () => {
  const { id } = useParams();
  const { follow, followingList, followerList } = useFetchFollow();
  const { postedUser } = useFetchUser(Number(id));

  return (
    <Presenter
      postedUser={postedUser}
      follow={follow}
      params={{ id }}
      followingList={followingList}
      followerList={followerList}
    />
  );
};

export default FollowPage;
