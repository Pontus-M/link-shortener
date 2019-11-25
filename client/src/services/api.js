import { apiUrl } from "config";

export function postUrl(url) {
  return fetch(`${apiUrl}/generate`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ url })
  });
}
