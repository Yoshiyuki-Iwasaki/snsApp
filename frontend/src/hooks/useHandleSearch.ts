import { notify } from '../util/notify';
import useFetchMyUser from './useFetchMyUser';
import useFetchChat from './useFetchChat';
import ChatApi from '../api/Chat/api';
import NotificationApi from '../api/Notification/api';
import { useNavigate } from 'react-router-dom';

// Chat作成処理をするcustom hooks.
const useHandleSearch = (inputChange) => {
  const navigate = useNavigate();
  const handleSearch = () => {
    console.log('inputChange', inputChange);
    navigate('/search/' + inputChange.content);
  };

  return handleSearch;
};

export default useHandleSearch;
