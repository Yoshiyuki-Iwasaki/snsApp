import React, { FC } from "react";
import { InputAndButton, Icon } from "./style";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import { FiSend } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { PresenterType } from "./type";
import { Box, Input } from "@chakra-ui/react";

const Presenter: FC<PresenterType> = ({ todo, addTodo, handleInputChange }) => {
  return (
    <Box p="5" borderWidth="1px">
      <Label>新規投稿</Label>
      {/* <InputAndButton onSubmit={e => addTodo(e)}> */}
      <Input
        mt={2}
        name={"name"}
        value={todo.name}
        onChange={handleInputChange}
      />
      <Button
        mt={2}
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
