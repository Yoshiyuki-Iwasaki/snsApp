import React, { FC } from "react";
import Button from "../../components/atoms/button";
import { FiSend } from "react-icons/fi";
import "react-toastify/dist/ReactToastify.css";
import { PresenterType } from "./type";
import { Box, Input, FormControl, Flex, Text } from "@chakra-ui/react";

const Presenter: FC<PresenterType> = ({ todo, addTodo, handleInputChange }) => {
  return (
    <Box p="5" borderWidth="1px">
      <Text fontSize="15px" fontWeight="700">
        新規投稿
      </Text>
      <FormControl onSubmit={addTodo}>
        <Flex>
          <Input
            mt={2}
            mr={2}
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
        </Flex>
      </FormControl>
    </Box>
  );
};

export default Presenter;
