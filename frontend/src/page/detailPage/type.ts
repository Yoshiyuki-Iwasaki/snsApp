type addReplyType = () => {};

export type DetailPageType = {
  params: any;
  currentTodo: {
    user: {
      id: number;
      name: string;
    };
    name: string;
    createdAt: string;
  };
  myUser: {
    data: {
      id: number;
    };
  };
  reply: {
    name: string;
  };
  replies: any;
  modalOpen: boolean;
  deleteTodo: any;
  handleModal: any;
  handleInputChange: any;
  addReply: addReplyType;
};
