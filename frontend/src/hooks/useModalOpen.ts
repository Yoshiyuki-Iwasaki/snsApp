import { useState } from "react";

const useModalOpen = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return { modalOpen, handleModal };
};

export default useModalOpen;
