import api from "../api";

const ENDPOINT = "/api/v1";

async function create(todo: any) {
  return api.post(ENDPOINT + `/login`, todo);
}

async function remove() {
  return api.delete(ENDPOINT + `/logout`);
}

async function logged_in() {
  return api.get(ENDPOINT + `/logged_in`);
}

const UserApi = {
  create,
  remove,
  logged_in,
};

export default UserApi;
