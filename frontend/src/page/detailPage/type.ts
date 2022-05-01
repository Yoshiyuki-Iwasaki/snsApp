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
  reply: any;
  replies: any;
  addReply: any;
};
