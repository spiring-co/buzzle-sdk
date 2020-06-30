const baseUrl = process.env.REACT_APP_API_URL;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `bearer ${localStorage.getItem("apikey")}`,
};

export const Creator = {
  get: async (id) => {
    const response = await fetch(`${baseUrl}/creators/${id}`, {
      headers,
    });
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  },
  create: async (user) => {
    const response = await fetch(`${baseUrl}/creators`, {
      method: "POST",
      headers,
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  },
  update: async (data) => {
    const response = await fetch(`${baseUrl}/creators`, {
      method: "PUT",
      headers,
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  },
};
