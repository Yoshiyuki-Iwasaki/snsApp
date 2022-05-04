import { useState } from 'react';

// モーダル処理をするcustom hooks.
const useModalOpen = () => {
  const [modalOpenFrag, setModalOpenFrag] = useState<boolean>(false);
  const handleModal = () => {
    setModalOpenFrag(!modalOpenFrag);
  };

  return { modalOpenFrag, handleModal };
};

export default useModalOpen;
