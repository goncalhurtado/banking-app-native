import axios from "axios";
import { API_URL } from "@env";

const url = API_URL;
export const axiosInstance = axios.create({
  // baseURL: "http://localhost:8080/api/v1",
  baseURL: `${url}/api/v1`,
});
