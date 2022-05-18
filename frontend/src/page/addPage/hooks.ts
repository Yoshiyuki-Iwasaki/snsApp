import { useNavigate } from 'react-router-dom';
import { notify } from '../../util/notify';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import PostApi from '../../api/Post/api';

// Post作成処理をするcustom hooks.
export const useAddPost = (inputChange: any) => {
  const { myUser } = useFetchMyUser();
  const navigate = useNavigate();
  const addPost = async () => {
    if (!inputChange.content) return;
    const data = {
      content: inputChange.content,
      user_id: myUser.data.id,
    };
    try {
      await PostApi.create(data);
      notify('正常に投稿が完了しました。');
      navigate('/');
    } catch (e: any) {
      console.log(e);
    }
  };

  return addPost;
};
