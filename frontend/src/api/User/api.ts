import api from "../api";
import { userType } from "./type";
const ENDPOINT = "/api/v1";

async function create(user: userType) {
  return api.post(ENDPOINT + `/users`, user);
}

async function show(id: string) {
  return api.get(ENDPOINT + `/users/` + id);
}

async function follow(id: string, user: any) {
  return api.post(ENDPOINT + `/users/` + id + "/follow", user);
}

async function login(todo: any) {
  return api.post(ENDPOINT + `/login`, todo);
}

const UserApi = {
  fetch,
  create,
  show,
  follow,
  login,
};

export default UserApi;
