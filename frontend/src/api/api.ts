import React from "react";
import storageUtils from "../util/storage";
import axios, { AxiosError } from "axios";

const snakeCase = require("snakecase-keys");
const camelCase = require("camelcase-keys");

export type APIResponseError = {
  statusCode: number;
  message: string;
};

const api = axios.create({
  timeout: 30 * 1000,
  withCredentials: true,
  headers: { accept: " application/json" },
});

api.interceptors.request.use(
  (req: any) => {
    const { accessToken } = storageUtils.getSavedToken();
    const locale = storageUtils.getLocal();
    if (accessToken) {
      req.headers["Authorization"] = `${accessToken}`;
    }
    req.params = req.params ? { ...req.params, locale } : { locale };
    req.params = snakeCase(req.params, { deep: true });

    if (req.data && req.headers["Content-Type"] !== "multipart/form-data") {
      req.params = snakeCase(req.params, { deep: true });
    }
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (res: any) => {
    if (res.data) res.data = camelCase(res.data, { deep: true });
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);

export const getApiErrorMessage = (
  error: AxiosError,
  detailed = false
): string => {
  if (!error.response) {
    return error.code || "unknown";
  }
  if (detailed) {
    return Object.values(error.response.data.errors || {}).join(", ");
  }

  return error.response.data.message || error.response.statusText;
};

export const getApiError = (error: AxiosError): APIResponseError => {
  return {
    statusCode: error.response!.status,
    message: getApiErrorMessage(error),
  };
};

export default api;
