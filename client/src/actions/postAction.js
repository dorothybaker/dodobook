import * as PostsApi from "../api/postRequest";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETRIVING_START" });
  try {
    const data = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETRIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETRIVING_FAIL" });
  }
};

export const getPosts = () => async (dispatch) => {
  dispatch({ type: "FETCHING_START" });
  try {
    const data = await PostsApi.getPosts();
    dispatch({ type: "FETCHING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCHING_FAIL" });
  }
};
