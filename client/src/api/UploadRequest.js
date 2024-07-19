import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const uploadPost = async (data) => {
  const response = await API.post("/posts", data);
  const result = await response?.data;
  return result;
};
