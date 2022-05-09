import { useNavigate } from 'react-router-dom';
import { notify } from '../util/notify';
import PostApi from '../api/Post/api';

// Post更新処理をするcustom hooks.
const useUpdatePost = (inputChange, setInputChange) => {
  const navigate = useNavigate();
  const updatePost = async () => {
    const postRes = await PostApi.update(inputChange.id, inputChange);
    setInputChange(postRes.data);
    notify('正常に投稿の編集が完了しました。');
    navigate('/');
  };

  return updatePost;
};

export default useUpdatePost;
