import { useNavigate } from 'react-router-dom';
import { notify } from '../util/notify';
import useFetchMyUser from './useFetchMyUser';
import postApi from '../api/Post/api';

// Post作成処理をするcustom hooks.
const useAddPost = (inputChange) => {
  const { myUser } = useFetchMyUser();
  const navigate = useNavigate();
  const addPost = async () => {
    if (!inputChange.name) return;
    const data = {
      name: inputChange.name,
      user_id: myUser.data.id,
    };
    await postApi.create(data);
    notify('正常に投稿が完了しました。');
    navigate('/');
  };

  return addPost;
};

export default useAddPost;
