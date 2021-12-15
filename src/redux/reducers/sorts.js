const initialState = {
  sortBy: "DESC",
};

const sorts = (state = initialState, action) => {
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
  return state;
};

export default sorts;
