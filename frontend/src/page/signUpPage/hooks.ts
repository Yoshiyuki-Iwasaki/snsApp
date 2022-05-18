import { useNavigate } from 'react-router-dom';
import { notify } from '../../util/notify';
import UserApi from '../../api/User/api';

// ユーザー新規作成処理をするcustom hooks.
export const useCreateUser = (inputChange) => {
  const navigate = useNavigate();
  const handleAddUser = async () => {
    await UserApi.create(inputChange);
    notify('正常にユーザー作成が完了しました。');
    navigate('/');
    window.location.reload();
  };

  return handleAddUser;
};
