/* eslint-disable no-throw-literal */
import axios from "axios";

import { AUTH_MESSAGE } from "../constant/en";
import { BASE_URL } from "../constant/urlContant";
import { CONTENT_TYPE_JSON } from "../constant/misc";

import { isEmpty as isObjectEmpty } from "../utils/object";
import { getAccessToken } from "../localStorageService/auth";

/**
 * Axios instance for login.
 */
export const loginAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
    Accept: CONTENT_TYPE_JSON,
  },
});

/**
 * Axios interceptor of authHTTP.
 */
loginAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (isObjectEmpty(error)) {
      throw { message: AUTH_MESSAGE.NO_RESPONSE, error };
    }

    switch (error.response?.status) {
      case 409:
        throw { data: AUTH_MESSAGE.MISSING_PAYLOAD, error };

      case 404:
        throw { data: AUTH_MESSAGE.USER_NOT_FOUND };

      case 401:
        throw { data: AUTH_MESSAGE.UNAUTHORISED, error };

      default:
        throw { data: AUTH_MESSAGE.DEFAULT_FAILURE_MESSAGE, error };
    }
  }
);

/**
 * Axios instance for Regsitering user.
 */
export const signUpAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
    Accept: CONTENT_TYPE_JSON,
  },
});

// TODO: Define Response Interceptor.

/**
 * Axios instance for Regsitering user.
 */
export const protectedAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": CONTENT_TYPE_JSON,
    Accept: CONTENT_TYPE_JSON,
  },
});

/**
 * Metod to get the request interceptor config for protected endpoints.
 */
const getAccessTokenForProtectedEndpoints = () => {
  return getAccessToken();
};

/**
 * Protected axios request interceptor.
 */
protectedAxios.interceptors.request.use((config) => {
  config.headers!.Authorization = `Bearer ${getAccessTokenForProtectedEndpoints().toString()}`;
  return config;
});
