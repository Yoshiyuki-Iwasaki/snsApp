import { notify } from '../../util/notify';
import useFetchMyUser from '../../hooks/useFetchMyUser';
import PostApi from '../../api/Post/api';

// Post作成処理をするcustom hooks.
export const useAddPost = (inputChange: any, setInputChange: any) => {
  const { myUser } = useFetchMyUser();
  const addPost = async (e: any) => {
    if (!inputChange.content) return;
    e.preventDefault();
    const data: any = {
      content: inputChange.content,
      user_id: myUser.data.id,
    };
    const emptyData = {
      content: '',
    };
    try {
      await PostApi.create(data);
      notify('正常に投稿が完了しました。');
      setInputChange(emptyData);
      window.location.reload();
    } catch (e: any) {
      console.log(e);
    }
  };

  return addPost;
};
