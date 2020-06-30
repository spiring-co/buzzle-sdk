//TODO move to auth
const baseUrl = process.env.REACT_APP_API_URL;
const fetch = require('node-fetch');

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: `bearer ${localStorage.getItem("apikey")}`,
};

export const sendOtp = async (email) => {
    const response = await fetch(baseUrl + "/auth/resetPasswordEmail", {
      method: "POST",
      headers,
      body: JSON.stringify({ email }),
    });
    if (!response.ok) throw new Error((await response.json()).message);
    return await response.json();
  };