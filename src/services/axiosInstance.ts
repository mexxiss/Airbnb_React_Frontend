import axios from "axios";
import { store } from "../store/store";
import { clearLoginData } from "../store/features/authSlice";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_LOCAL_API_URL,
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      store.dispatch(clearLoginData());
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      store.dispatch(clearLoginData());
      window.location.href = "/login";
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
