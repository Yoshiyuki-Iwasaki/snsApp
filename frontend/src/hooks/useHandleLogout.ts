import { useNavigate } from 'react-router-dom';
import UserApi from '../api/User/api';
import useFetchMyUser from './useFetchMyUser';

// Logout処理をするcustom hooks.
const useHandleLogout = () => {
  const navigate = useNavigate();
  const { myUser, setMyUser } = useFetchMyUser();

  const handleLogout = async () => {
    await UserApi.logout();
    setMyUser('');
    navigate('/');
    window.location.reload();
  };

  return { myUser, handleLogout };
};

export default useHandleLogout;
