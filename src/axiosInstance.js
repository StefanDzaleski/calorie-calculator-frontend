import axios from "axios";

// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://cute-blue-snail-sari.cyclic.app/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
