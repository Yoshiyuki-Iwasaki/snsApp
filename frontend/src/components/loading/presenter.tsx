import React from 'react';
import { Center } from '@chakra-ui/react';
import ReactLoading from 'react-loading';

const Presenter = () => {
  return (
    <Center>
      <ReactLoading
        type="spin"
        color="#ebc634"
        height="50px"
        width="50px"
        className="mx-auto"
      />
    </Center>
  );
};

export default Presenter;
