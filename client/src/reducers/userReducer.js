const userReducer = (
  state = { data: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "USER_START":
      return { ...state, loading: true, error: false };
    case "USER_SUCCESS":
      return { ...state, data: action.data, loading: false, error: false };
    case "USER_FAIL":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default userReducer;
