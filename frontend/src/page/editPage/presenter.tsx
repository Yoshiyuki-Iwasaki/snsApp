import React, { FC } from "react";
import { InputName } from "./style";
import Button from "../../components/atoms/button";
import { formatDate } from "../../util/data";
import Label from "../../components/atoms/label";
import { EditPage } from "./type";
import { Box, Flex, Container, Link } from "@chakra-ui/react";

const Presenter: FC<EditPage> = ({
  currentTodo,
  handleInputChange,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <Box p="5" w="500px" borderWidth="1px">
      <Label>{formatDate(currentTodo.createdAt)}</Label>
      <label htmlFor="name">Current Name</label>
      <InputName
        type="text"
        name="name"
        value={currentTodo.name}
        onChange={handleInputChange}
      />
      <Label>CurrentStatus</Label>
      <Button onClick={updateTodo}>Update</Button>
      <Button onClick={deleteTodo}>Delete</Button>
    </Box>
  );
};

export default Presenter;
