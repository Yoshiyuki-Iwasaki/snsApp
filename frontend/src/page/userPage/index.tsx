import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Presenter from './presenter';
import useFetchMyPost from '../../hooks/useFetchMyPost';
import useFetchLikedMyPost from '../../hooks/useFetchLikedMyPost';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import useFetchUser from '../../hooks/useFetchUser';
import useFetchFollow from '../../hooks/useFetchFollow';
import useHandleFollow from '../../hooks/useHandleFollow';
import useHandleUnFollow from '../../hooks/useHandleUnFollow';

const UserPage: FC = () => {
  const params = useParams();
  const myPost = useFetchMyPost(Number(params.id));
  const likedPost = useFetchLikedMyPost(Number(params.id));
  const { myUser } = useFetchMyUser();
  const { user } = useFetchUser(Number(params.id));
  const { follow, fetchFollow } = useFetchFollow();
  const handleFollow = useHandleFollow(myUser, params, fetchFollow);
  const handleUnfollow = useHandleUnFollow(follow, fetchFollow);

  return (
    <Presenter
      user={user}
      follow={follow}
      myUser={myUser}
      myPost={myPost}
      likedPost={likedPost}
      params={params}
      handleUnfollow={handleUnfollow}
      handleFollow={handleFollow}
    />
  );
};

export default UserPage;
