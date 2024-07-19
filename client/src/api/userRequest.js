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

export const getUser = async (id) => {
  const response = await API.get(`/users/${id}`);
  const result = await response?.data;

  return result;
};

export const updateUser = async (id, formData) => {
  const response = await API.put(`/users/${id}`, formData);
  const result = await response?.data;

  return result;
};

export const followUser = async (id, data) => {
  const response = await API.put(`/users/${id}/follow`, data);
  return response.data;
};
export const unfollowUser = async (id, data) => {
  const response = await API.put(`/users/${id}/unfollow`, data);
  return response.data;
};
