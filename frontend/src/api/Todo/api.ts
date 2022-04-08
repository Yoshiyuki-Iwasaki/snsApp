import api from "../api";

async function fetch() {
  return api.get("/api/v1/todos");
}

const TodoApi = {
  fetch,
};

export default TodoApi;
