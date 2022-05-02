import api from '../api';
const ENDPOINT = '/api/v1';

async function fetch(todo_id: number) {
  return api.get(ENDPOINT + `/replies/` + `/todos/` + todo_id);
}

async function create(reply: any) {
  return api.post(ENDPOINT + `/replies`, reply);
}

async function remove(id: number) {
  return api.delete(ENDPOINT + `/replies/` + id);
}

const ReplyApi = {
  fetch,
  create,
  remove,
};

export default ReplyApi;
