import React, { FC } from 'react';
import Presenter from './presenter';
import { useParams } from 'react-router-dom';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import { useHandleFollow } from './hooks';
import { useHandleUnFollow } from './hooks';
import useFetchFollow from '../../hooks/useFetchFollow';

const FollowButton: FC = () => {
  const { follow, fetchFollow } = useFetchFollow();
  const { id } = useParams();
  const { myUser } = useFetchMyUser();
  const handleFollow = useHandleFollow(myUser, { id }, fetchFollow);
  const handleUnfollow = useHandleUnFollow(follow, fetchFollow);

  return (
    <Presenter
      follow={follow}
      handleUnfollow={handleUnfollow}
      handleFollow={handleFollow}
    />
  );
};

export default FollowButton;
