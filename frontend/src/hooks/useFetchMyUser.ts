import { useEffect, useState } from 'react';
import UserApi from '../api/User/api';
import { MyUserType } from '../type/MyUser';

// ログイン中ユーザー情報を取得するcustom hooks.
const useFetchMyUser = () => {
  const [myUser, setMyUser] = useState<any>();

  const fetchUser = async () => {
    const userRes = await UserApi.fetchLoginUser();
    setMyUser(userRes.data);
  };

  useEffect(() => {
    myUser && fetchUser();
  }, [myUser]);

  return { myUser, setMyUser, fetchUser };
};

export default useFetchMyUser;
