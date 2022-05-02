import { FC, useEffect, useState } from 'react';
import UserApi from '../api/User/api';

const useFetchUser = (val) => {
  const [user, setUser] = useState<any>();

  const fetchUser = async () => {
    const userRes = await UserApi.show(val);
    setUser(userRes.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, setUser, fetchUser };
};

export default useFetchUser;
