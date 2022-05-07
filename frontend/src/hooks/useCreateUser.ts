import { useNavigate } from 'react-router-dom';
import { notify } from '../util/notify';
import AuthApi from '../api/Auth/api';

// ユーザー新規作成処理をするcustom hooks.
const useCreateUser = (inputChange) => {
  const navigate = useNavigate();
  const handleAddUser = async () => {
    await AuthApi.create(inputChange);
    notify('正常にユーザー作成が完了しました。');
    navigate('/');
    window.location.reload();
  };

  return handleAddUser;
};

export default useCreateUser;
