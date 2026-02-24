import axios from "axios";

export const axiosInstance = axios.create({
    // baseURL: "http://localhost:4000/api",
  baseURL: "https://api.madhavamfoundation.com/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);