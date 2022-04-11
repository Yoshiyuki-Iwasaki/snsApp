import api from "../api";

const ENDPOINT = "/api/v1";

async function create(todo: any) {
  return api.post(ENDPOINT + `/login`, todo);
}

async function remove() {
  return api.delete(ENDPOINT + `/logout`);
}

const UserApi = {
  create,
  remove,
};

export default UserApi;
