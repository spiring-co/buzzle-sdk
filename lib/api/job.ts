import apiRequest from "../helpers/apiRequest";
import { JobInterface } from "../interfaces";
export default function Job(baseUrl: String, headers: Object): JobInterface {
  return {
    getAll: async (
      page,
      size,
      query,
      sortBy = "dateCreated",
      orderBy = "desc",
      extraParams
    ) => {
      return apiRequest(
        `${baseUrl}/jobs?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&${query}&${extraParams}`,
        {
          method: "GET",
          headers,
        }
      );
    },

    get: async (id, populateVideoTemplate, extraParams) => {
      return apiRequest(
        `${baseUrl}/jobs/${id}?populateVideoTemplate=${populateVideoTemplate}&${extraParams}`,
        { method: "GET", headers }
      );
    },

    create: async ({
      actions,
      data,
      idVideoTemplate,
      idVersion,
      renderPrefs,
      extraData,
      extraParams,
    }) => {
      return apiRequest(`${baseUrl}/jobs?${extraParams}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          actions,
          data,
          idVideoTemplate,
          idVersion,
          renderPrefs,
          extraData,
        }),
      });
    },

    update: async (id, data, extraParams) => {
      return apiRequest(`${baseUrl}/jobs/${id}?${extraParams}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ data }),
      });
    },

    updateMultiple: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/jobs?${extraParams}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ data }),
      });
    },

    delete: async (id, extraParams) => {
      return apiRequest(`${baseUrl}/jobs/${id}?${extraParams}`, {
        method: "DELETE",
        headers,
      });
    },
    deleteMultiple: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/jobs?${extraParams}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
