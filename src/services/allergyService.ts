import { ALLERGIES } from "../constant/urlContant";
import { protectedAxios } from "./axios";

export const getAllAllergiesForUser = async (userId: number) => {
  const response = await protectedAxios.get(`/users/${userId}/allergies`);

  return response;
};

export const addAllergyForUser = async (payload: AllergyPayload) => {
  const reponse = await protectedAxios.post(ALLERGIES, payload);

  return reponse;
}