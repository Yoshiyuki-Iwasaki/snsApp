import { useNavigate } from 'react-router-dom';
import { notify } from '../util/notify';
import TodoApi from '../api/Todo/api';

const useUpdateTodo = (inputChange, setInputChange) => {
  const navigate = useNavigate();
  const updateTodo = async () => {
    const todoRes = await TodoApi.update(inputChange.id, inputChange);
    setInputChange(todoRes.data);
    notify('正常に投稿の編集が完了しました。');
    navigate('/');
  };

  return updateTodo;
};

export default useUpdateTodo;
