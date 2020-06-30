const baseUrl = process.env.REACT_APP_API_URL;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `bearer ${localStorage.getItem("apikey")}`,
};

export const VideoTemplate = {
  get: async () => {},
  create: async (data) => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + `/videoTemplates`,
      {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      }
    );
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  },
  update: async (id, data) => {
    const response = await fetch(`${baseUrl}/videoTemplates/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${baseUrl}/videoTemplates/${id}`, {
      method: "DELETE",
      headers,
    });
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  },
};
export const Fonts = {
  getStatus: async (name) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/fonts?name=${name}`
      );
      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        return { name, src: "" };
      }
    } catch (err) {
      console.log(err);
      return { name, src: "" };
    }
  },
  addFont: async (fontObj) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/fonts`, {
        method: "POST",
        headers,
        body: JSON.stringify(fontObj),
      });
    } catch (err) {
      console.log(err);
    }
  },
};
