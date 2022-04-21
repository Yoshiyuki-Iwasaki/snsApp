import api from "../api";
const ENDPOINT = "/api/v1";

async function fetch(user_id: number, todo_id: number) {
  return api.get(
    ENDPOINT + `/todos/` + todo_id + `/users/` + user_id + `/favorites`
  );
}

async function fetch_userTodo(user_id: number) {
  return api.get(ENDPOINT + "/favorites" + `/users/` + user_id);
}

async function create(user_id: number, todo_id: number, favorite: any) {
  return api.post(
    ENDPOINT + `/todos/` + todo_id + `/users/` + user_id + `/favorites`,
    favorite
  );
}

async function remove(id: number) {
  return api.delete(ENDPOINT + `/favorites/` + id);
}

const FavoriteApi = {
  fetch,
  fetch_userTodo,
  create,
  remove,
};

export default FavoriteApi;
