import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://calorie-calculator-backend.vercel.app",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default axiosInstance;
