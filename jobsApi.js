const baseUrl = process.env.REACT_APP_API_URL;
if (!fetch) const fetch = require("node-fetch");

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `bearer ${localStorage.getItem("apikey")}`,
};

export const Job = {
  get: async (id, populateVideoTemplate) => {
    const response = await fetch(
      `${baseUrl}/jobs/${id}?populateVideoTemplate=${populateVideoTemplate}`,
      {
        headers,
      }
    );

    if (!response.ok) throw new Error("request failed.");
    return await response.json();
  },

  create: async ({ actions, assets, videoTemplateId, versionId }) => {
    const response = await fetch(`${baseUrl}/jobs`, {
      method: "POST",
      headers,
      body: JSON.stringify({ actions, assets, videoTemplateId, versionId }),
    });
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  },

  update: async (id, { actions, assets }) => {
    const response = await fetch(`${baseUrl}/jobs/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ actions, assets }),
    });
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${baseUrl}/jobs/${id}`, {
      method: "DELETE",
      headers,
    });

    if (!response.ok) throw new Error("request failed.");
    return await response.json();
  },
};
