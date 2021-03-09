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
      idCreator: String,
      extraParams
    ) => {
      return apiRequest(
        `${baseUrl}/videoTemplates?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&idCreator=${idCreator}&${query}&${extraParams}`,
        {
          method: "GET",
          headers,
        }
      );
    },
    get: async (id, extraParams) => {
      return apiRequest(`${baseUrl}/videoTemplates/${id}?${extraParams}`, {
        method: "GET",
        headers,
      });
    },

    create: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/videoTemplates?${extraParams}`, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
    },

    update: async (id, data, extraParams) => {
      return apiRequest(`${baseUrl}/videoTemplates/${id}?${extraParams}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },
    updateMany: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/videoTemplates?${extraParams}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },

    delete: async (id, extraParams) => {
      return apiRequest(`${baseUrl}/videoTemplates/${id}?${extraParams}`, {
        method: "DELETE",
        headers,
      });
    },
    deleteMany: async (data,extraParams) => {
      return apiRequest(`${baseUrl}/videoTemplates?${extraParams}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
