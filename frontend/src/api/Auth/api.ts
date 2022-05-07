import api from '../api';
import Cookies from 'js-cookie';
const ENDPOINT = '/api/v1/auth';

async function create(user: any) {
  return api.post(ENDPOINT, user);
}

async function login(user: any) {
  return api.post(ENDPOINT + `/sign_in`, user);
}

async function change_password_mail(email: any, redirect_url: any) {
  return api.post(ENDPOINT + `/password/`, email, redirect_url);
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

const AuthApi = {
  create,
  login,
  change_password_mail,
  logout,
  fetchLoginUser,
};

export default AuthApi;
