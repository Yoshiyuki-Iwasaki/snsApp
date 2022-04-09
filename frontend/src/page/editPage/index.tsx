import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { InputName, CurrentStatus } from "./style";
import Button from "../../components/atoms/button";
import TodoApi from "../../api/Todo/api";

toast.configure();

const EditTodo: FC = props => {
  const params = useParams();
  const initialTodoState = {
    id: null,
    name: "",
    is_completed: false,
  };
  const [currentTodo, setCurrentTodo] = useState(initialTodoState);
  const navigate = useNavigate();

  const notify = () => {
    toast.success("Todo successfully updated.", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
    });
  };

  const fetchTodoData = async id => {
    const todoRes = await TodoApi.fetch_detail(id);
    setCurrentTodo(todoRes.data);
    console.log("currentTodo", todoRes.data);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const updateIsCompleted = val => {
    const data = {
      id: val.id,
      name: val.name,
      is_completed: !val.is_completed,
    };
    axios.patch(`/api/v1/todos/${val.id}`, data).then(res => {
      setCurrentTodo(res.data);
    });
  };

  const updateTodo = async () => {
    const todoRes = await TodoApi.update(currentTodo.id, currentTodo);
    setCurrentTodo(todoRes.data);
    notify();
    navigate("/");
  };

  const deleteTodo = () => {
    const sure = window.confirm("Are you sure?");
    if (sure) {
      axios
        .delete(`/api/v1/todos/${currentTodo.id}`)
        .then(res => {
          notify();
          navigate("/");
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  useEffect(() => {
    fetchTodoData(params.id);
  }, [params.id]);

  return (
    <>
      <h1>Edit Todo</h1>
      <label htmlFor="name">Current Name</label>
      <InputName
        type="text"
        name="name"
        value={currentTodo.name}
        onChange={handleInputChange}
      />
      <p>CurrentStatus</p>
      <CurrentStatus>
        {currentTodo.is_completed ? "Completed" : "unCompleted"}
      </CurrentStatus>
      <Button onClick={() => updateIsCompleted(currentTodo)}>
        {currentTodo.is_completed ? "unCompleted" : "Completed"}
      </Button>
      <Button onClick={updateTodo}>Update</Button>
      <Button onClick={deleteTodo}>Delete</Button>
    </>
  );
};

export default EditTodo;
