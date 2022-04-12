import api from "../api";
import { todoType } from "./type";

const ENDPOINT = "/api/v1/todos";

async function fetch() {
  return api.get(ENDPOINT);
}

async function fetch_detail(id: number) {
  return api.get(ENDPOINT + `/` + id);
}

async function create(todo: todoType) {
  return api.post(ENDPOINT, todo);
}

async function update(id: number, todo: todoType) {
  return api.patch(ENDPOINT + `/` + id, todo);
}

async function remove(id: number) {
  return api.delete(ENDPOINT + `/` + id);
}

async function remove_all() {
  return api.delete(ENDPOINT + "/destroy_all");
}

const TodoApi = {
  fetch,
  fetch_detail,
  create,
  update,
  remove,
  remove_all,
};

export default TodoApi;