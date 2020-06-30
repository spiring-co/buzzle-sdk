const apiRequest = require("../helpers/apiRequest");

module.exports = function Creator(baseUrl, headers) {
  return {
    get: async (id) => {
      return apiRequest(`${baseUrl}/creators/${id}`, {
        method: "GET",
        headers,
      });
    },

    create: async (user) => {
      return apiRequest(`${baseUrl}/creators`, {
        method: "POST",
        headers,
        body: JSON.stringify(user),
      });
    },

    update: async (id, data) => {
      return apiRequest(`${baseUrl}/creators/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(data),
      });
    },
  };
};
