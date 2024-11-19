import axios from "axios";
import { store } from "../store/store"; // Adjust the path based on your folder structure

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1", // Replace with your API base URL
  timeout: 10000, // Set a timeout limit
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from Redux store
    const state = store.getState();
    const token = state.auth.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors (e.g., refresh tokens, show notifications)
    return Promise.reject(error);
  }
);

export default axiosInstance;
