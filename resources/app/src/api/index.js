const headers = {
  "Content-Type": "application/json",
  Accept: "application/json, text-plain, */*",
};
const token = localStorage.getItem("token");
export default {
  async get(url) {
    return fetch(url);
  },
  async login(data) {
    return fetch("/api/login", {
      headers: headers,
      method: "POST",
      body: JSON.stringify(data),
    });
  },
  async request(url, method, data) {
    if (!token) {
      throw new Error("Token not found");
    }
    headers["Authorization"] = "bearer " + token;
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: headers,
    });
  },
};
