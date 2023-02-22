import axios from "axios";

// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://calorie-calculator-backend.vercel.app";

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
