import axios from "axios";

const client = axios.create({ baseURL: "https://dev.sallaplus.com/api" });

export const request = ({ ...options }) => {
  //   client.defaults.headers.common.Authorization = `Bearer token`;
  //   client.interceptors.request.use((config) => {
  //     config.headers["authorization"] = "Bearer ";
  //     return config;
  //   });
  return client(options);
};
