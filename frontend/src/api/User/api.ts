import api from '../api';
import Cookies from 'js-cookie';
const ENDPOINT = '/api/v1/';

async function create(user: any) {
  return api.post(ENDPOINT + `auth`, user);
}

async function login(user: any) {
  return api.post(ENDPOINT + `auth/sign_in`, user);
}

async function change_password_mail(email: string, redirect_url: string) {
  return api.post(ENDPOINT + `auth/password`, {
    email: email,
    redirect_url: redirect_url,
  });
}

async function change_password(user: any) {
  return api.patch(ENDPOINT + `auth/password/`, user, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
      expiry: Cookies.get('_expiry'),
      'token-type': Cookies.get('_token-type'),
    },
  });
}

async function logout() {
  return api.delete(ENDPOINT + `auth/sign_out`, {
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
  return api.get(ENDPOINT + `auth/sessions`, {
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
  return api.get(ENDPOINT + `users/` + id);
}

async function fetchUserRoom(myUser_id: number, users_id: number) {
  return api.get(
    ENDPOINT + `chats/` + `myUser/` + myUser_id + `/users/` + users_id
  );
}

async function fetchUserRoomMember(id: number) {
  return api.get(ENDPOINT + `chats/` + `users/` + id);
}

async function follow(id: string, user: any) {
  return api.post(ENDPOINT + `users/` + id + '/follow', user);
}

async function update(id: number, user: any) {
  return api.patch(ENDPOINT + `users/` + id, user);
}

async function search(id: string) {
  return api.get(ENDPOINT + `search/users/` + id);
}

const UserApi = {
  create,
  login,
  logout,
  change_password_mail,
  change_password,
  fetchLoginUser,
  show,
  fetchUserRoom,
  fetchUserRoomMember,
  follow,
  update,
  search,
};

export default UserApi;
