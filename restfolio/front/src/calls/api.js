import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default {
  login: (data) => {
    return axios.post("rest-auth/login/", {
      username: data.login,
      password: data.password,
    });
  },
  post: (url, data) => {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Token ${token}` },
    };
    if (!token) {
      throw new Error("No token Received");
    }
    console.log(token);
    return axios.post(url, data, config);
  },
  put: (url, data) => {
    let token = localStorage.getItem("token");
    let config = {
      headers: { Authorization: `Token ${token}` },
    };
    if (!token) {
      throw new Error("No token Received");
    }
    console.log(token);
    return axios.put(url, data, config);
  },
  get: (url) => {
    return axios.get(url);
  },
};
