import { useState } from 'react';

const useModalOpen = () => {
  const [modalOpenFrag, setModalOpenFrag] = useState<boolean>(false);
  const handleModal = () => {
    setModalOpenFrag(!modalOpenFrag);
  };

  return { modalOpenFrag, handleModal };
};

export default useModalOpen;
