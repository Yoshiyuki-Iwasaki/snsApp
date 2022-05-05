import api from '../api';
const ENDPOINT = '/api/v1';

async function fetch(id: number) {
  return api.get(ENDPOINT + `/notifications` + `/user/` + id);
}

async function create(data: any) {
  return api.post(ENDPOINT + `/notifications`, data);
}

const NotificationApi = {
  fetch,
  create,
};

export default NotificationApi;
