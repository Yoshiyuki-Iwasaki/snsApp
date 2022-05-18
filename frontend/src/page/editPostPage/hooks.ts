import { useNavigate } from 'react-router-dom';
import { notify } from '../../util/notify';
import PostApi from '../../api/Post/api';

// Post更新処理をするcustom hooks.
export const useUpdatePost = (inputChange, setInputChange) => {
  const navigate = useNavigate();
  const updatePost = async () => {
    try {
      const postRes = await PostApi.update(inputChange.id, inputChange);
      setInputChange(postRes.data);
      notify('正常に投稿の編集が完了しました。');
      navigate('/');
    } catch (e: any) {
      console.log(e);
    }
  };

  return updatePost;
};
