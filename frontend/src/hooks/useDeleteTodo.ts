import { useNavigate } from "react-router-dom";
import { notify } from "../util/notify";
import TodoApi from "../api/Todo/api";

const useDeleteTodo = inputChange => {
  const navigate = useNavigate();
  const deleteTodo = async () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      await TodoApi.remove(inputChange.id);
      notify("正常に投稿の編集が完了しました。");
      navigate("/");
    }
  };

  return deleteTodo;
};

export default useDeleteTodo;
