import { useNavigate } from 'react-router-dom';
import { notify } from '../util/notify';
import UserApi from '../api/User/api';

const useHandleAddUser = (inputChange) => {
  const navigate = useNavigate();
  const handleAddUser = async () => {
    await UserApi.create(inputChange);
    notify('正常にユーザー作成が完了しました。');
    navigate('/signin');
  };

  return handleAddUser;
};

export default useHandleAddUser;
