import api from '../api';
import { favoriteType } from './type';
const ENDPOINT = '/api/v1';

async function fetch(user_id: number, todo_id: number) {
  return api.get(
    ENDPOINT + `/todos/` + todo_id + `/users/` + user_id + `/favorites`
  );
}

async function fetch_replyTodo(user_id: number, reply_id: number) {
  return api.get(
    ENDPOINT + `/replies/` + reply_id + `/users/` + user_id + '/favorites'
  );
}

async function fetch_userTodo(user_id: number) {
  return api.get(ENDPOINT + '/favorites' + `/users/` + user_id);
}

async function create(data: favoriteType) {
  return api.post(ENDPOINT + `/favorites`, data);
}

async function remove(id: number) {
  return api.delete(ENDPOINT + `/favorites/` + id);
}

const FavoriteApi = {
  fetch,
  fetch_replyTodo,
  fetch_userTodo,
  create,
  remove,
};

export default FavoriteApi;
