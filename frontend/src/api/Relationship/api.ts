import api from '../api';
import { RelationshipType } from './type';
const ENDPOINT = '/api/v1';

async function fetch(following_id: number, follower_id: number) {
  return api.get(
    ENDPOINT +
      `/following/` +
      following_id +
      `/follower/` +
      follower_id +
      `/relationships`
  );
}

async function fetch_following(follower_id: number) {
  return api.get(ENDPOINT + `/follower/` + follower_id + `/relationships`);
}

async function fetch_follower(following_id: number) {
  return api.get(ENDPOINT + `/following/` + following_id + `/relationships`);
}

async function create(following_id: number, data: RelationshipType) {
  return api.post(
    ENDPOINT + `/following/` + following_id + `/relationships`,
    data
  );
}

async function remove(id: number) {
  return api.delete(ENDPOINT + `/relationships/` + id);
}

const RelationshipApi = {
  fetch,
  fetch_following,
  fetch_follower,
  create,
  remove,
};

export default RelationshipApi;
