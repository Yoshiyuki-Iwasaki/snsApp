import { notify } from "../util/notify";
import useFetchMyUser from "./useFetchMyUser";
import ReplyApi from "../api/Reply/api";

const useAddTodo = (inputChange, params, fetchReply) => {
  const { myUser } = useFetchMyUser();
  const addReply = async () => {
    const data = {
      todo_id: Number(params.id),
      name: inputChange.name,
      user_id: myUser.data.id,
    };
    await ReplyApi.create(data);
    fetchReply();
    notify("正常にリプライが完了しました。");
  };

  return addReply;
};

export default useAddTodo;
