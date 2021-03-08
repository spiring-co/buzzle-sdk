import apiRequest from "../helpers/apiRequest";
import { AuthInterface } from "../interfaces";

export default function Auth(
  baseUrl: String,
  headers: Object
): AuthInterface {
  return {
    login: async (data) => {
      return apiRequest(`${baseUrl}/auth/login`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },
    verifyEmail: async () => {
      return apiRequest(`${baseUrl}/auth/verifyEmail`, {
        method: "GET",
        headers,
      });
    },

    resetPassword: async (data) => {
      return apiRequest(`${baseUrl}/auth/resetPassword`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },

    resetPasswordEmail: async (data) => {
      return apiRequest(`${baseUrl}/auth/resetPasswordEmail`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
