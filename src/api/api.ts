import { API_URL } from "@/env";
import axios from "axios";
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
