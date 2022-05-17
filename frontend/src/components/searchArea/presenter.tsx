import { Flex, FormControl, Input, Button } from '@chakra-ui/react';
import React, { FC } from 'react';
import { PresenterType } from './type';
import { SearchIcon } from '@chakra-ui/icons';

const Presenter: FC<PresenterType> = ({
  search,
  handleInputChange,
  handleSearch,
}) => {
  return (
    <>
      <FormControl mr={2}>
        <Flex>
          <Input
            mt={2}
            mr={2}
            name={'content'}
            value={search.content}
            onChange={handleInputChange}
          />
          <Button mt={2} onClick={handleSearch}>
            <button>
              <SearchIcon />
            </button>
          </Button>
        </Flex>
      </FormControl>
    </>
  );
};

export default Presenter;
