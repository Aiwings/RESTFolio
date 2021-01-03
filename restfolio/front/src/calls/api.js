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
    return axios.post(url, data);
  },
  get: (url) => {
    return fetch(url);
  },
};
