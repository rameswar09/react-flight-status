import axios from "axios";

export const axiosApiCall = axios.create();

axiosApiCall.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiCall.interceptors.response.use(
  function (response) {
    if(response.status!==200){
      return Promise.reject("");
    }
    return response;

  },
  function (error) {
    return Promise.reject(error);
  }
);
