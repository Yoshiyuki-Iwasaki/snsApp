import { useNavigate } from 'react-router-dom';
import UserApi from '../api/User/api';
import useFetchMyUser from './useFetchMyUser';

// Logout処理をするcustom hooks.
const useHandleLogout = () => {
  const navigate = useNavigate();
  const { myUser, setMyUser } = useFetchMyUser();

  const handleLogout = async () => {
    try {
      await UserApi.logout();
      setMyUser('');
      navigate('/');
      window.location.reload();
    } catch (e: any) {
      console.log(e);
    }
  };

  return { myUser, handleLogout };
};

export default useHandleLogout;
