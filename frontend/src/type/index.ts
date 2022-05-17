export type eventType = {
  target: {
    name: string;
    value: string;
  };
};

export type handleInputChangeType = (event: eventType) => void;
export type addReplyType = () => {};
export type deletePostType = () => {};
export type handleModalType = () => void;
export type addPostType = () => {};
export type updatePostType = () => {};
export type handleLoginType = () => {};
export type handleAddUserType = () => {};
export type fetchPostType = (page: number) => {};
export type handleUnfollowType = () => {};
export type handleFollowType = () => {};
export type handleLikeType = () => {};
export type handleUnlikeType = () => {};
export type handleLogoutType = () => {};
export type handleNotificationCheckType = (val: any) => {};
export type handleSearchType = () => void;
