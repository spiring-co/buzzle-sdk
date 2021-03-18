import apiRequest from "../helpers/apiRequest";
import { AuthInterface } from "../interfaces";
import * as objectToQueryString from "../helpers/objectToQueryString";

export default function Auth(baseUrl: String, headers: Object): AuthInterface {
  return {
    login: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/auth/login?${objectToQueryString(
        extraParams
      )}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },
    verifyEmail: async (extraParams) => {
      return apiRequest(`${baseUrl}/auth/verifyEmail?${objectToQueryString(
        extraParams
      )}`, {
        method: "GET",
        headers,
      });
    },

    resetPassword: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/auth/resetPassword?${objectToQueryString(
        extraParams
      )}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },

    resetPasswordEmail: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/auth/resetPasswordEmail?${objectToQueryString(
        extraParams
      )}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
