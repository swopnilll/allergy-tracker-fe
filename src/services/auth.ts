import { loginAxios, signUpAxios } from "./axios";

import { LOGIN_URL, REGISTRATION_URL } from "../constant/urlContant";

/**
 * Send request for login.
 *
 * @param {{email, password}} payload
 * @returns {Promise<{accessToken, refreshToken}>}
 */
export const login = async ({ email, password }: LoginCredentials) => {
  const { data } = await loginAxios.post(LOGIN_URL, {
    email,
    password,
  });

  return data;
};

/**
 * Send request for registering user.
 *
 * @param {{name, email, password}} payload
 * @return {Promise<{}>}
 */
export const register = async ({
  name,
  email,
  password,
}: RegistrationCredentials) => {
  const { data } = await signUpAxios.post(REGISTRATION_URL, {
    name,
    email,
    password,
  });

  return data;
};
