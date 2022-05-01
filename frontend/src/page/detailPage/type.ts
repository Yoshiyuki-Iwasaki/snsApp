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
  handleInputChange: any;
  reply: {
    name: string;
  };
  replies: any;
  addReply: addReplyType;
};
