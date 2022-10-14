import {
  getValueFromLocalStorage,
  removeValueFromLocalStorage,
  setValueInLocalStorage,
} from "../utils/localStorage";
import { isEmpty as isStringEmpty } from "../utils/string";

/**
 * Method to set access token.
 *
 * @param {String} accessToken
 * @returns {Promise}
 */
export const setAccessToken = (accessToken: string) => {
  return setValueInLocalStorage("accessToken", accessToken);
};

/**
 * Method to set refresh token.
 *
 * @param {String} refreshToken
 * @returns {Promise}
 */
export const setRefreshToken = (refreshToken: string) => {
  return setValueInLocalStorage("refreshToken", refreshToken);
};

/**
 * Method to get access token.
 *
 * @returns {String}
 */
export const getAccessToken = () => {
  const userDetails = getValueFromLocalStorage("user");

  const accessToken = userDetails ? JSON.parse(userDetails).accessToken : null;

  return accessToken;
};

/**
 * Method to get refresh token.
 *
 * @returns {String}
 */
export const getRefreshToken = () => {
  return getValueFromLocalStorage("refreshToken");
};

/**
 * Method to validate if user is logged in.
 */
export const validateAuthentication = () => {
  const accessToken = getAccessToken();

  return !isStringEmpty(accessToken);
};

/**
 * Method to add user to local storage.
 *
 * @param user
 */
export const addUserToLocalStorage = (user: any) => {
  setValueInLocalStorage("user", JSON.stringify(user));
};

/**
 * Method to remove user from local storage.
 */
export const removeUserFromLocalStorage = () => {
  removeValueFromLocalStorage("user");
};

/**
 *
 * @returns object
 */
export const getUserFromLocalStorage = () => {
  const result = getValueFromLocalStorage("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
