import { useState, useEffect } from 'react';
import UserApi from '../api/User/api';
import useFetchMyUser from './useFetchMyUser';

// Postを取得するcustom hooks.
const useFetchUserRoom = (id) => {
  const { myUser } = useFetchMyUser();
  const [chatRoom, setChatRoom] = useState();

  const fetchUserRoom = async () => {
    const room = await UserApi.fechUserRoom(myUser.data.id, Number(id));
    setChatRoom(room.data);
  };

  useEffect(() => {
    myUser && fetchUserRoom();
  }, [myUser]);

  return { chatRoom, fetchUserRoom };
};

export default useFetchUserRoom;
