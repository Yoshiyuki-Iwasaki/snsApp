import api from "../api";
import { todoType } from "./type";

const ENDPOINT = "/api/v1/todos";

async function fetch(pageNumber: number) {
  return api.get(ENDPOINT + `/page/` + pageNumber);
}

async function show(id: number) {
  return api.get(ENDPOINT + `/` + id);
}

async function fetch_userTodo(id: number) {
  return api.get(ENDPOINT + `/users/` + id);
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

const TodoApi = {
  fetch,
  show,
  fetch_userTodo,
  create,
  update,
  remove,
};

export default TodoApi;
