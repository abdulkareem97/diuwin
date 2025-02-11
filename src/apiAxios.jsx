import axios from "axios";

const apiAxios = axios.create({
  baseURL: "http://localhost:4000", // Set your base API URL
  withCredentials: true, // Automatically include credentials (cookies, tokens)
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

export default apiAxios;
