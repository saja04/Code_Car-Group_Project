let initialState = { hola: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COUNTRIES":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
