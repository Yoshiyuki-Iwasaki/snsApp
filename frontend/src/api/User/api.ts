import api from '../api';
const ENDPOINT = '/api/v1/users';

async function show(id: string) {
  return api.get(ENDPOINT + `/` + id);
}

async function follow(id: string, user: any) {
  return api.post(ENDPOINT + `/` + id + '/follow', user);
}

async function update(id: number, user: any) {
  return api.patch(ENDPOINT + `/` + id, user);
}

const UserApi = {
  show,
  follow,
  update,
};

export default UserApi;
