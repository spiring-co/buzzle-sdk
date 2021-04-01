import apiRequest from "../helpers/apiRequest";
import { JobInterface } from "../interfaces";
import * as objectToQueryString from "../helpers/objectToQueryString";

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
        `${baseUrl}/jobs?page=${page}&size=${size}&sortBy=${sortBy}&orderBy=${orderBy}&${query}&${objectToQueryString(
          extraParams
        )}`,
        {
          method: "GET",
          headers,
        }
      );
    },

    get: async (id, populateVideoTemplate, extraParams) => {
      return apiRequest(
        `${baseUrl}/jobs/${id}?populateVideoTemplate=${populateVideoTemplate}&${objectToQueryString(
          extraParams
        )}`,
        { method: "GET", headers }
      );
    },
    getCount: async (dateUpdated, dateStarted) => {
      return apiRequest(
        `${baseUrl}/jobs/count?dateUpdated=${dateUpdated}&dateStarted=${dateStarted}}`,
        { method: "GET", headers }
      );
    },

    create: async ({
      actions,
      data,
      idVideoTemplate,
      idVersion,
      renderPrefs,
      extra,
      extraParams,
    }) => {
      return apiRequest(`${baseUrl}/jobs?${objectToQueryString(extraParams)}`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          actions,
          data,
          idVideoTemplate,
          idVersion,
          renderPrefs,
          extra,
        }),
      });
    },

    update: async (id, data, extraParams) => {
      return apiRequest(
        `${baseUrl}/jobs/${id}?${objectToQueryString(extraParams)}`,
        {
          method: "PUT",
          headers,
          body: JSON.stringify(data),
        }
      );
    },

    updateMultiple: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/jobs?${objectToQueryString(extraParams)}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },

    delete: async (id, extraParams) => {
      return apiRequest(
        `${baseUrl}/jobs/${id}?${objectToQueryString(extraParams)}`,
        {
          method: "DELETE",
          headers,
        }
      );
    },
    deleteMultiple: async (data, extraParams) => {
      return apiRequest(`${baseUrl}/jobs?${objectToQueryString(extraParams)}`, {
        method: "DELETE",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
}
