import api from '../api';
import Cookies from 'js-cookie';
const ENDPOINT = '/api/v1/';

async function create(user: any) {
  return api.post(ENDPOINT + `/auth`, user);
}

async function login(user: any) {
  return api.post(ENDPOINT + `/auth/sign_in`, user);
}

async function change_password_mail(email: any, redirect_url: any) {
  return api.post(ENDPOINT + `/auth/password/`, email, redirect_url);
}

async function logout() {
  return api.delete(ENDPOINT + `/sign_out`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
      expiry: Cookies.get('_expiry'),
      'token-type': Cookies.get('_token-type'),
    },
  });
}

export const fetchLoginUser = () => {
  if (
    !Cookies.get('_access_token') ||
    !Cookies.get('_client') ||
    !Cookies.get('_uid')
  )
    return;
  return api.get(ENDPOINT + `/sessions`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
      expiry: Cookies.get('_expiry'),
      'token-type': Cookies.get('_token-type'),
    },
  });
};

async function show(id: string) {
  return api.get(ENDPOINT + `/users/` + id);
}

async function follow(id: string, user: any) {
  return api.post(ENDPOINT + `/users/` + id + '/follow', user);
}

async function update(id: number, user: any) {
  return api.patch(ENDPOINT + `/users/` + id, user);
}

const UserApi = {
  create,
  login,
  logout,
  fetchLoginUser,
  change_password_mail,
  show,
  follow,
  update,
};

export default UserApi;
