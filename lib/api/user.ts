import apiRequest from "../helpers/apiRequest";
import { UserInterface } from "../interfaces";
import * as objectToQueryString from "../helpers/objectToQueryString";

export default function Creator(
  baseUrl: String,
  headers: Object
): UserInterface {
  return {
    getAll: async (page, size, extraParams) => {
      return apiRequest(
        `${baseUrl}/users?page=${page}&size=${size}&$${objectToQueryString(
          extraParams
        )}`,
        {
          method: "GET",
          headers,
        }
      );
    },
    get: async (id, extraParams) => {
      return apiRequest(`${baseUrl}/users/${id}?$${objectToQueryString(
          extraParams
        )}`, {
        method: "GET",
        headers,
      });
    },

    delete: async (id, data, extraParams) => {
      return apiRequest(`${baseUrl}/users/${id}?$${objectToQueryString(
          extraParams
        )}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify(data),
      });
    },

    create: async (user, extraParams) => {
      return apiRequest(`${baseUrl}/users?$${objectToQueryString(
          extraParams
        )}`, {
        method: "POST",
        headers,
        body: JSON.stringify(user),
      });
    },
    update: async (id, data, extraParams) => {
      return apiRequest(`${baseUrl}/users/${id}?$${objectToQueryString(
          extraParams
        )}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
