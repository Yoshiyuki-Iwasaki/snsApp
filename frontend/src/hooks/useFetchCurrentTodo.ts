import { useState, useEffect } from 'react';
import TodoApi from '../api/Todo/api';
import { useParams } from 'react-router-dom';

const useFetchTodoData = (inputChange?: any, setInputChange?: any) => {
  const params = useParams();
  const initialTodoState = {
    id: null,
    name: '',
    createdAt: '',
  };
  const [currentTodo, setCurrentTodo] = useState<any>(initialTodoState);
  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const todoRes = await TodoApi.show(Number(params.id));
        inputChange
          ? setInputChange(todoRes.data)
          : setCurrentTodo(todoRes.data);
      } catch (e: any) {
        console.log(e);
      }
    };

    fetchTodoData();
  }, []);

  return inputChange ? { inputChange, setInputChange } : currentTodo;
};

export default useFetchTodoData;
