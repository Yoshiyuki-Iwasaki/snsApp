import { useNavigate } from 'react-router-dom';
import { notify } from '../util/notify';
import PostApi from '../api/Post/api';
import ReplyApi from '../api/Reply/api';

type inputChangeType = {
  id: string | number;
};

// Post削除処理をするcustom hooks.
const useDeletePost = (inputChange: inputChangeType, replyFrag?: boolean) => {
  const navigate = useNavigate();
  const deletePost = async () => {
    try {
      const sure = window.confirm('削除して問題ないですか?');
      if (sure) {
        replyFrag
          ? await ReplyApi.remove(Number(inputChange.id))
          : await PostApi.remove(Number(inputChange.id));
        !replyFrag && navigate('/');
        replyFrag
          ? notify('正常に返信の削除が完了しました。')
          : notify('正常に投稿の削除が完了しました。');
        window.location.reload();
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  return deletePost;
};

export default useDeletePost;
