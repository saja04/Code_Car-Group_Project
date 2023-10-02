import { GET_CARS } from "./actions";

const initialState = {
  allCars: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        allCars: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
