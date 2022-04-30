import React, { FC } from "react";
import { InputAndButton, Icon } from "./style";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";
import { FiSend } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { PresenterType } from "./type";
import { Box, Flex, Container, Link } from "@chakra-ui/react";

const Presenter: FC<PresenterType> = ({ todo, addTodo, handleInputChange }) => {
  return (
    <Box p="5" w="500px" borderWidth="1px">
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
    </Box>
  );
};

export default Presenter;
