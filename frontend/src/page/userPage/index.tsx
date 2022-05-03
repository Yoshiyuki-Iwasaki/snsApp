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
  const { id } = useParams();
  const myPost = useFetchMyPost(Number(id));
  const likedPost = useFetchLikedMyPost(Number(id));
  const { myUser } = useFetchMyUser();
  const { postedUser } = useFetchUser(Number(id));
  const { follow, fetchFollow } = useFetchFollow();
  const handleFollow = useHandleFollow(myUser, { id }, fetchFollow);
  const handleUnfollow = useHandleUnFollow(follow, fetchFollow);

  return (
    <Presenter
      postedUser={postedUser}
      follow={follow}
      myUser={myUser}
      myPost={myPost}
      likedPost={likedPost}
      params={{ id }}
      handleUnfollow={handleUnfollow}
      handleFollow={handleFollow}
    />
  );
};

export default UserPage;
