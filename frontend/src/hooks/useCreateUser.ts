import { useNavigate } from 'react-router-dom';
import { notify } from '../util/notify';
import UserApi from '../api/User/api';

const useCreateUser = (inputChange) => {
  const navigate = useNavigate();
  const handleAddUser = async () => {
    await UserApi.create(inputChange);
    notify('正常にユーザー作成が完了しました。');
    navigate('/');
    window.location.reload();
  };

  return handleAddUser;
};

export default useCreateUser;
