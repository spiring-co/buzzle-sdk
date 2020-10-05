import apiRequest from "../helpers/apiRequest";
import { SearchInterface } from "../interfaces";
export default function Creator(
  baseUrl: String,
  headers: Object
): SearchInterface {
  return {
    get: async (text, page, size) => {
      return apiRequest(
        `${baseUrl}/search?text=${text}&page=${page}&size=${size}`,
        {
          method: "GET",
          headers,
        }
      );
    },
  };
}
