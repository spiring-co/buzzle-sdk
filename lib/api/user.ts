import apiRequest from "../helpers/apiRequest";
import { UserInterface } from "../interfaces";

export default function Creator(
  baseUrl: String,
  headers: Object
): UserInterface {
  return {
    getAll: async (page, size) => {
      return apiRequest(`${baseUrl}/users?page=${page}&size=${size}`, {
        method: "GET",
        headers,
      });
    },
    get: async (id) => {
      return apiRequest(`${baseUrl}/users/${id}`, {
        method: "GET",
        headers,
      });
    },

    delete: async ( id, data ) => {
      return apiRequest(`${baseUrl}/users/${id}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify(data),
      });
    },

    create: async (user) => {
      return apiRequest(`${baseUrl}/users`, {
        method: "POST",
        headers,
        body: JSON.stringify(user),
      });
    },
    update: async (id, data) => {
      return apiRequest(`${baseUrl}/users/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
