import axios from "axios";

const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: "http://192.168.100.66:8080",
  //   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  //   baseURL: "https://204.236.176.47:8088/",
  //   baseURL: "https://api.codequant.io/",
});

export default api;
