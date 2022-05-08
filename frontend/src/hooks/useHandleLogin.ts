import { useNavigate } from 'react-router-dom';
import { notify } from '../util/notify';
import useFetchMyUser from './useFetchMyUser';
import UserApi from '../api/User/api';
import Cookies from 'js-cookie';

// Login処理をするcustom hooks.
const useHandleLogin = (inputChange) => {
  const { fetchUser } = useFetchMyUser();
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('test');
    const data = {
      email: inputChange.email,
      password: inputChange.password,
    };
    try {
      console.log('test01');
      const res = await UserApi.login(data);
      Cookies.set('_access_token', res.headers['access-token']);
      Cookies.set('_client', res.headers['client']);
      Cookies.set('_uid', res.headers['uid']);
      notify('正常にログインが完了しました。');
      fetchUser();
      navigate('/');
      window.location.reload();
    } catch (e) {
      console.log(e);
      console.log('test02');
    }
  };

  return handleLogin;
};

export default useHandleLogin;
