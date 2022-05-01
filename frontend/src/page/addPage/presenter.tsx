import React, { FC } from "react";
import Label from "../../components/atoms/label";
import Button from "../../components/atoms/button";
import { FiSend } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { PresenterType } from "./type";
import { Box, Input, FormControl } from "@chakra-ui/react";

const Presenter: FC<PresenterType> = ({ todo, addTodo, handleInputChange }) => {
  return (
    <Box p="5" borderWidth="1px">
      <Label>新規投稿</Label>
      <FormControl onSubmit={addTodo}>
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
          <button>
            <FiSend />
          </button>
        </Button>
      </FormControl>
    </Box>
  );
};

export default Presenter;
