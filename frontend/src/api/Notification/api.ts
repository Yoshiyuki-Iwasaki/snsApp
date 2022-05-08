import api from '../api';
const ENDPOINT = '/api/v1';

async function fetch(id: number) {
  return api.get(ENDPOINT + `/notifications` + `/user/` + id);
}

async function create(data: any) {
  return api.post(ENDPOINT + `/notifications`, data);
}

async function update(id: number, notifications: any) {
  return api.patch(ENDPOINT + `/notifications/` + id, notifications);
}

const NotificationApi = {
  fetch,
  create,
  update,
};

export default NotificationApi;
