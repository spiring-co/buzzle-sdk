import apiRequest from "../helpers/apiRequest";
import { WebhookInterface } from "../interfaces";

export default function Webhook(
  baseUrl: String,
  headers: Object
): WebhookInterface {
  return {
    getAll: async () => {
      return apiRequest(`${baseUrl}/webhooks`, {
        method: "GET",
        headers,
      });
    },
    get: async (id) => {
      return apiRequest(`${baseUrl}/webhooks/${id}`, {
        method: "GET",
        headers,
      });
    },

    create: async (webhook) => {
      return apiRequest(`${baseUrl}/webhooks`, {
        method: "POST",
        headers,
        body: JSON.stringify(webhook),
      });
    },
  };
}
