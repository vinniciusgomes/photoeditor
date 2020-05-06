import axios from "axios";

const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "https://api.github.com",
});

export default api;
