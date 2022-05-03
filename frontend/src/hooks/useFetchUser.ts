import { useEffect, useState } from 'react';
import UserApi from '../api/User/api';

const useFetchUser = (val) => {
  const [postedUser, setPostedUser] = useState();

  const fetchUser = async () => {
    const userRes = await UserApi.show(val);
    setPostedUser(userRes.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { postedUser, setPostedUser, fetchUser };
};

export default useFetchUser;
