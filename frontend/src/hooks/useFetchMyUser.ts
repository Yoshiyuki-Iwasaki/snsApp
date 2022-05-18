import { useEffect, useState } from 'react';
import UserApi from '../api/User/api';

// ログイン中ユーザー情報を取得するcustom hooks.
const useFetchMyUser = () => {
  const [myUser, setMyUser] = useState<any>();

  const fetchUser = async () => {
    try {
      const userRes = await UserApi.fetchLoginUser();
      setMyUser(userRes.data);
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { myUser, setMyUser, fetchUser };
};

export default useFetchMyUser;
