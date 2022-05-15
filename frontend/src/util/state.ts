export const initialPostState = {
  id: null,
  content: '',
  user_id: '',
};

export const initialEditPostState = {
  id: null,
  content: '',
};

export const initialChatState = {
  id: null,
  user_id: '',
  room_id: '',
  message: '',
};

export const initialUserState = {
  id: null,
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  image: null,
  nickname: '',
  provider: '',
  uid: '',
};

export const initialReplyState = {
  id: null,
  content: '',
  user_id: '',
  post_id: '',
  createdAt: '',
};
