type deleteTodoType = () => {};
type handleModalType = () => void;

export type ListMenuType = {
  myUser: {
    data: {
      id: number;
    };
  };
  user: {
    id: number;
    name: string;
  };
  modalOpen: boolean;
  detailPageFrag: boolean;
  val: {
    id: number;
    createdAt: string;
    name: string;
  };
  handleModal: handleModalType;
  deleteTodo: deleteTodoType;
};
