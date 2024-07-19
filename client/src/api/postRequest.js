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

export const getTimelinePosts = async (id) => {
  const response = await API.get(`/posts/${id}/timeline`);
  const result = await response?.data;
  return result;
};

export const getPosts = async () => {
  const response = await API.get(`/posts`);
  const result = await response?.data;
  return result;
};

export const likePost = async (id, userId) => {
  const response = await API.put(`posts/${id}/like`, { userId: userId });
  return response.data;
};
