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

async function logout() {
  return api.delete(ENDPOINT + `/logout`);
}

async function logged_in() {
  return api.get(ENDPOINT + `/logged_in`);
}

const UserApi = {
  create,
  logout,
  show,
  login,
  logged_in,
};

export default UserApi;
