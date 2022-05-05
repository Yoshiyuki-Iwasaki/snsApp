import React, { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Presenter from './presenter';
import useFetchFollow from '../../hooks/useFetchFollow';

const FollowPage: FC = () => {
  const { followingList, followerList } = useFetchFollow();
  return (
    <Presenter followingList={followingList} followerList={followerList} />
  );
};

export default FollowPage;
