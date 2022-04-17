import api from "../api";
import { userType } from "./type";
const ENDPOINT = "/api/v1";

async function create(user: userType) {
  return api.post(ENDPOINT + `/users`, user);
}

async function show(id: any) {
  return api.get(ENDPOINT + `/users/` + id);
}

async function login(todo: any) {
  return api.post(ENDPOINT + `/login`, todo);
}

const UserApi = {
  fetch,
  create,
  show,
  login,
};

export default UserApi;
