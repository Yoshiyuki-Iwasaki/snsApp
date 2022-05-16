import api from '../api';
import { postType } from './type';

const ENDPOINT = '/api/v1/posts';

async function fetch(pageNumber: number) {
  return api.get(ENDPOINT + `/page/` + pageNumber);
}

async function show(id: number) {
  return api.get(ENDPOINT + `/` + id);
}

async function fetch_userPost(id: number) {
  return api.get(ENDPOINT + `/users/` + id);
}

async function create(post: postType) {
  return api.post(ENDPOINT, post);
}

async function update(id: number, post: postType) {
  return api.patch(ENDPOINT + `/` + id, post);
}

async function remove(id: number) {
  return api.delete(ENDPOINT + `/` + id);
}

async function search(id: string) {
  return api.get(ENDPOINT + `/search/` + id);
}

const PostApi = {
  fetch,
  show,
  fetch_userPost,
  create,
  update,
  remove,
  search,
};

export default PostApi;
