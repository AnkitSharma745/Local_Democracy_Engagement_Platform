import { AUTH_TOKEN_KEY } from '@/utils/constants';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

function onTokenExpiry() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  window.location.href = '/login';
}

axiosInstance.interceptors.request.use(
  (config) => {
    const myConfig = config;
    const token: string | null = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      myConfig.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorResponse = error.response;
    if (errorResponse?.status === 401) {
      onTokenExpiry();
    }
    return Promise.reject(error);
  }
);
