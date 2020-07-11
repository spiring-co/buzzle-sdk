const apiRequest = require("../helpers/apiRequest");

module.exports = function Job(baseUrl, headers) {
  return {
    get: async (id, populateVideoTemplate) => {
      return apiRequest(
        `${baseUrl}/jobs/${id}?populateVideoTemplate=${populateVideoTemplate}`,
        {
          method: "GET",
          headers,
        }
      );
    },

    create: async ({
      actions,
      assets,
      idVideoTemplate,
      idVersion,
      renderPrefs,
    }) => {
      console.log("Base", baseUrl);
      return apiRequest(`${baseUrl}/jobs`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          actions,
          assets,
          idVideoTemplate,
          idVersion,
          renderPrefs,
        }),
      });
    },

    update: async (id, { actions, assets, renderPrefs }) => {
      return apiRequest(`${baseUrl}/jobs/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ actions, assets, renderPrefs }),
      });
    },
    delete: async (id) => {
      return apiRequest(`${baseUrl}/jobs/${id}`, {
        method: "DELETE",
        headers,
      });
    },
  };
};
