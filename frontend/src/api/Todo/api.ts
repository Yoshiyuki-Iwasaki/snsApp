import api from "../api";

async function fetch() {
  return api.get("/api/v1/todos");
}
async function create(todo: any) {
  return api.post("/api/v1/todos", todo);
}

const TodoApi = {
  fetch,
  create,
};

export default TodoApi;
