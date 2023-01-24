import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://calorie-calculator-backend.vercel.app",
  // baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default axiosInstance;
