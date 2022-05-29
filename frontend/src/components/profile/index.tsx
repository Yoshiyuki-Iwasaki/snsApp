import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import Presenter from './presenter';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import useFetchUser from '../../hooks/useFetchUser';
import useFetchFollow from '../../hooks/useFetchFollow';
import { useFetchUserRoom } from './hooks';

const Profile: FC = () => {
  const { id } = useParams();
  const { myUser } = useFetchMyUser();
  const { postedUser } = useFetchUser(Number(id));
  const { follow, checkedFollow } = useFetchFollow();
  const { chatRoom } = useFetchUserRoom(id);

  return (
    <Presenter
      chatRoom={chatRoom}
      postedUser={postedUser}
      follow={follow}
      checkedFollow={checkedFollow}
      myUser={myUser}
      params={{ id }}
    />
  );
};

export default Profile;
