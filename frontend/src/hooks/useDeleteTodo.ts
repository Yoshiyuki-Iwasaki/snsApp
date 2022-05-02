import { useNavigate } from "react-router-dom";
import { notify } from "../util/notify";
import TodoApi from "../api/Todo/api";
import ReplyApi from "../api/Reply/api";

const useDeleteTodo = (inputChange: any, replyFrag?: boolean) => {
  const navigate = useNavigate();
  const deleteTodo = async () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      replyFrag
        ? await ReplyApi.remove(Number(inputChange.id))
        : await TodoApi.remove(Number(inputChange.id));
      !replyFrag && navigate("/");
      replyFrag
        ? notify("正常に返信の削除が完了しました。")
        : notify("正常に投稿の削除が完了しました。");
      window.location.reload();
    }
  };

  return deleteTodo;
};

export default useDeleteTodo;
