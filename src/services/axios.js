import axios from "axios";

const AXIOS = axios.create();

AXIOS.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

AXIOS.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location = "/";
    }

    return Promise.reject(error);

}
);

export default AXIOS;