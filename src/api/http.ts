import axios from "axios";

export const http = axios.create({
  baseURL: "https://higuera-billing-api.desarrollo-software.xyz/api",
  timeout: 15000,
});
