import "isomorphic-fetch"
export default async (uri, options) => {
  const response = await fetch(uri, options);
  if (!response.ok) throw new Error((await response.json()).message);
  return await response.json();
};
