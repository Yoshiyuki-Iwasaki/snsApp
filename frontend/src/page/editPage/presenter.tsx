import React, { FC } from "react";
import { InputName, CurrentStatus } from "./style";
import Button from "../../components/atoms/button";
import { formatDate } from "../../util/data";
import Label from "../../components/atoms/label";
import { EditPage } from "./type";

const Presenter: FC<EditPage> = ({
  currentTodo,
  handleInputChange,
  updateIsCompleted,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <>
      <Label>Edit Todo</Label>
      <Label>{formatDate(currentTodo.createdAt)}</Label>
      <label htmlFor="name">Current Name</label>
      <InputName
        type="text"
        name="name"
        value={currentTodo.name}
        onChange={handleInputChange}
      />
      <Label>CurrentStatus</Label>
      <CurrentStatus>
        {currentTodo.completed ? "Completed" : "unCompleted"}
      </CurrentStatus>
      <Button onClick={() => updateIsCompleted(currentTodo)}>
        {currentTodo.completed ? "unCompleted" : "Completed"}
      </Button>
      <Button onClick={updateTodo}>Update</Button>
      <Button onClick={deleteTodo}>Delete</Button>
    </>
  );
};

export default Presenter;