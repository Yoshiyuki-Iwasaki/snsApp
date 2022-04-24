import api from "../api";
import { userType } from "./type";
import Cookies from "js-cookie";
const ENDPOINT = "/api/v1";

async function create(user: userType) {
  return api.post(ENDPOINT + `/auth`, user);
}

async function login(user: any) {
  return api.post(ENDPOINT + `/auth/sign_in`, user);
}

async function logout() {
  return api.delete(ENDPOINT + `/auth/sign_out`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
}

export const fetch_loginUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;
  return api.get(ENDPOINT + `/auth/sessions`, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

async function show(id: string) {
  return api.get(ENDPOINT + `/users/` + id);
}

async function follow(id: string, user: any) {
  return api.post(ENDPOINT + `/users/` + id + "/follow", user);
}

const UserApi = {
  create,
  login,
  logout,
  show,
  follow,
  fetch_loginUser,
};

export default UserApi;
