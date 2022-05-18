import { useEffect, useState } from 'react';
import UserApi from '../api/User/api';

// Userを取得するcustom hooks.
const useFetchUser = (val) => {
  const [postedUser, setPostedUser] = useState();

  const fetchUser = async () => {
    try {
      const userRes = await UserApi.show(val);
      setPostedUser(userRes.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { postedUser, setPostedUser, fetchUser };
};

export default useFetchUser;
