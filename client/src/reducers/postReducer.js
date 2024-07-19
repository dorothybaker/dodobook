const postReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case "UPLOAD_START":
      return { ...state, error: false, uploading: true };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        posts: [action.data, ...state.posts],
        uploading: false,
        error: false,
      };
    case "UPLOAD_FAIL":
      return { ...state, uploading: false, error: true };

    // belongs to user posts
    case "RETRIVING_START":
      return { ...state, loading: true, error: false };
    case "RETRIVING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "RETRIVING_FAIL":
      return { ...state, loading: false, error: true };

    // belongs to all posts
    case "FETCHING_START":
      return { ...state, loading: true, error: false };
    case "FETCHING_SUCCESS":
      return { ...state, posts: action.data, loading: false, error: false };
    case "FETCHING_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default postReducer;
