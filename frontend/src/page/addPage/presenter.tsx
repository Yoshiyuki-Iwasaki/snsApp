import React, { FC } from "react";
import { InputAndButton, Icon } from "./style";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";
import "react-toastify/dist/ReactToastify.css";
import { FiSend } from "react-icons/fi";

const Presenter: FC<any> = ({ todo, addTodo, handleInputChange }) => {
  return (
    <>
      <Label>新規投稿</Label>
      {/* <InputAndButton onSubmit={e => addTodo(e)}> */}
      <Input name={"name"} value={todo.name} onChange={handleInputChange} />
      <Button
        onClick={addTodo}
        disabled={!todo.name || /^\s*$/.test(todo.name)}
      >
        <Icon>
          <FiSend />
        </Icon>
      </Button>
      {/* </InputAndButton> */}
    </>
  );
};

export default Presenter;