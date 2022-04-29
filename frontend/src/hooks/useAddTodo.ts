import { useNavigate } from "react-router-dom";
import { notify } from "../util/notify";
import useFetchMyUser from "./useFetchMyUser";
import TodoApi from "../api/Todo/api";

const useAddTodo = inputChange => {
  const { myUser } = useFetchMyUser();
  const navigate = useNavigate();
  const addTodo = async () => {
    const data = {
      name: inputChange.name,
      user_id: myUser.data.id,
    };
    await TodoApi.create(data);
    notify("正常に投稿が完了しました。");
    navigate("/");
  };

  return addTodo;
};

export default useAddTodo;
