import { useEffect, useState } from 'react';
import AuthApi from '../api/Auth/api';
import { MyUserType } from '../type/MyUser';

// ログイン中ユーザー情報を取得するcustom hooks.
const useFetchMyUser = () => {
  const [myUser, setMyUser] = useState<any>();

  const fetchUser = async () => {
    const userRes = await AuthApi.fetchLoginUser();
    setMyUser(userRes.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { myUser, setMyUser, fetchUser };
};

export default useFetchMyUser;
