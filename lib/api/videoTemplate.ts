import apiRequest from "../helpers/apiRequest";
import { VideoTemplateInterface } from "../interfaces";
export default function VideoTemplate(
  baseUrl: String,
  headers: Object
): VideoTemplateInterface {
  return {
    getAll: async (
      page,
      size,
      query,
      sortBy = "dateCreated",
      orderBy = "desc",
      idCreator: String
    ) => {
      return apiRequest(
        `${baseUrl}/videoTemplates?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&idCreator=${idCreator}&${query}`,
        {
          method: "GET",
          headers,
        }
      );
    },
    get: async (id) => {
      return apiRequest(`${baseUrl}/videoTemplates/${id}`, {
        method: "GET",
        headers,
      });
    },

    create: async (data) => {
      return apiRequest(`${baseUrl}/videoTemplates`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },

    update: async (id, data) => {
      return apiRequest(`${baseUrl}/videoTemplates/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },
    updateMany: async (data) => {
      return apiRequest(`${baseUrl}/videoTemplates`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },

    delete: async (id) => {
      return apiRequest(`${baseUrl}/videoTemplates/${id}`, {
        method: "DELETE",
        headers,
      });
    },
    deleteMany: async (data) => {
      return apiRequest(`${baseUrl}/videoTemplates`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
