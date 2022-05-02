import api from '../api';
const ENDPOINT = '/api/v1';

async function fetch(follow_id: number, follower_id: number) {
  return api.get(
    ENDPOINT +
      `/users/` +
      follow_id +
      `/follower/` +
      follower_id +
      `/relationships`
  );
}

async function create(follow_id: number, data: any) {
  return api.post(ENDPOINT + `/users/` + follow_id + `/relationships`, data);
}

async function remove(id: number) {
  return api.delete(ENDPOINT + `/relationships/` + id);
}

const RelationshipApi = {
  fetch,
  create,
  remove,
};

export default RelationshipApi;
