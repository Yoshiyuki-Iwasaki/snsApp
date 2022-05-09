import api from '../api';
import { favoriteType } from './type';
const ENDPOINT = '/api/v1';

async function fetch(user_id: number, post_id: number) {
  return api.get(
    ENDPOINT + `/posts/` + post_id + `/users/` + user_id + `/favorites`
  );
}

async function fetch_replyPost(user_id: number, reply_id: number) {
  return api.get(
    ENDPOINT + `/replies/` + reply_id + `/users/` + user_id + '/favorites'
  );
}

async function fetch_userPost(user_id: number) {
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
  fetch_replyPost,
  fetch_userPost,
  create,
  remove,
};

export default FavoriteApi;
