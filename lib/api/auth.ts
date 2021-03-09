import apiRequest from "../helpers/apiRequest";
import { AuthInterface } from "../interfaces";

export default function Auth(baseUrl: String, headers: Object): AuthInterface {
  return {
    login: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/auth/login?${extraParams}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },
    verifyEmail: async (extraParams) => {
      return apiRequest(`${baseUrl}/auth/verifyEmail?${extraParams}`, {
        method: "GET",
        headers,
      });
    },

    resetPassword: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/auth/resetPassword?${extraParams}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },

    resetPasswordEmail: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/auth/resetPasswordEmail?${extraParams}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
