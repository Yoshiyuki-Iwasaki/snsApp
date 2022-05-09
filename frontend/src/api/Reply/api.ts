import api from '../api';
import { replyType } from './type';
const ENDPOINT = '/api/v1';

async function fetch(post_id: number) {
  return api.get(ENDPOINT + `/replies/` + `/posts/` + post_id);
}

async function create(data: replyType) {
  return api.post(ENDPOINT + `/replies`, data);
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
