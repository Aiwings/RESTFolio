const headers = {
  "Content-Type": "application/json",
  Accept: "application/json, text-plain, */*",
};
const token = localStorage.getItem("token");
export default {
  async get(url) {
    return fetch(url);
  },
  async post(url, data) {
    return fetch(url, {
      headers: headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  },
  async put(url, data) {
    if (!token) {
      throw new Error("Token not found");
    }
    headers["Authorization"] = "bearer " + token;
    return fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: headers,
    });
  },
};
