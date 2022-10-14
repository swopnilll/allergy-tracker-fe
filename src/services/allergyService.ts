import { ALLERGIES } from "../constant/urlContant";
import { protectedAxios } from "./axios";

export const getAllAllergiesForUser = async (userId: number, queryString = "") => {
  const response = await protectedAxios.get(`/users/${userId}/allergies?name=${queryString}`);

  return response;
};

export const addAllergyForUser = async (payload: AllergyPayload) => {
  const reponse = await protectedAxios.post(ALLERGIES, payload);

  return reponse;
};

export const deleteAllergy = async (allergieId: number) => {
  const reponse = await protectedAxios.delete(`${ALLERGIES}/${allergieId}`);

  return reponse;
};

export const editAllergy = async (payload: any) => {
  const reponse = await protectedAxios.patch(
    `${ALLERGIES}/${payload.editAllergyId}`,
    {
      name: payload.name,
      severity: payload.severity,
      isHighRisk: payload.isHighRisk,
      symtoms: payload.symtoms,
    }
  );

  return reponse;
};
