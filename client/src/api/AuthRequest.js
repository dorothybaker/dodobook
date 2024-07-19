import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

export const logIn = async (data) => {
  const response = await API.post("/auth/login", data);
  const result = await response?.data;
  return result;
};

export const register = async (data) => {
  const response = await API.post("/auth/register", data);
  const result = await response?.data;
  return result;
};
