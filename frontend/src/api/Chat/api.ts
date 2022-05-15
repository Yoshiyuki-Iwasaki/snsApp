import api from '../api';
const ENDPOINT = '/api/v1';

async function fetch(id: number) {
  return api.get(ENDPOINT + `/chats/` + id);
}

async function create(data: any) {
  return api.post(ENDPOINT + `/chats`, data);
}

const ChatApi = {
  fetch,
  create,
};

export default ChatApi;
