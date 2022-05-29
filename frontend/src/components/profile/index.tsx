import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Presenter from './presenter';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import useFetchUser from '../../hooks/useFetchUser';
import useFetchFollow from '../../hooks/useFetchFollow';
import { useHandleFollow } from './hooks';
import { useHandleUnFollow } from './hooks';
import { useFetchUserRoom } from './hooks';

const Profile: FC = () => {
  const { id } = useParams();
  const { myUser } = useFetchMyUser();
  const { postedUser } = useFetchUser(Number(id));
  const { follow, fetchFollow, checkedFollow } = useFetchFollow();
  const { chatRoom } = useFetchUserRoom(id);
  const handleFollow = useHandleFollow(myUser, { id }, fetchFollow);
  const handleUnfollow = useHandleUnFollow(follow, fetchFollow);

  return (
    <Presenter
      chatRoom={chatRoom}
      postedUser={postedUser}
      follow={follow}
      checkedFollow={checkedFollow}
      myUser={myUser}
      params={{ id }}
      handleUnfollow={handleUnfollow}
      handleFollow={handleFollow}
    />
  );
};

export default Profile;
