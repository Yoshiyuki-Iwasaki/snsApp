import { useNavigate } from 'react-router-dom';
import UserApi from '../api/User/api';
import useFetchMyUser from './useFetchMyUser';

const useHandleLogout = () => {
  const navigate = useNavigate();
  const { myUser, setMyUser } = useFetchMyUser();

  const handleLogout = async () => {
    await UserApi.logout();
    setMyUser('');
    navigate('/');
  };

  return { myUser, handleLogout };
};

export default useHandleLogout;
