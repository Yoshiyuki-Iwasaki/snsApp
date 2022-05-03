export type eventType = {
  target: {
    name: string;
    value: string;
  };
};

export type handleInputChangeType = (event: eventType) => void;
export type addReplyType = () => {};
export type deleteTodoType = () => {};
export type handleModalType = () => void;
export type addTodoType = () => {};
export type updateTodoType = () => {};
export type handleLoginType = () => {};
export type handleAddUserType = () => {};
export type fetchTodoType = (page: number) => {};
export type handleUnfollowType = () => {};
export type handleFollowType = () => {};
export type handleLikeType = () => {};
export type handleUnlikeType = () => {};
export type handleLogoutType = () => {};
