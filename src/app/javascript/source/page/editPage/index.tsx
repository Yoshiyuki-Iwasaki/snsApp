import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  InputName,
  CurrentStatus,
  IsCompletedButton,
  EditButton,
  DeleteButton,
} from "./style";

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

  const fetchTodoData = id => {
    axios
      .get(`/api/v1/todos/${id}`)
      .then(res => {
        setCurrentTodo(res.data);
      })
      .catch(e => {
        console.log(e);
      });
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

  const updateTodo = () => {
    axios
      .patch(`/api/v1/todos/${currentTodo.id}`, currentTodo)
      .then(res => {
        notify();
        navigate("/");
      })
      .catch(e => {
        console.log(e);
      });
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
      <IsCompletedButton onClick={() => updateIsCompleted(currentTodo)}>
        {currentTodo.is_completed ? "unCompleted" : "Completed"}
      </IsCompletedButton>
      <EditButton onClick={updateTodo}>Update</EditButton>
      <DeleteButton onClick={deleteTodo}>Delete</DeleteButton>
    </>
  );
};

export default EditTodo;