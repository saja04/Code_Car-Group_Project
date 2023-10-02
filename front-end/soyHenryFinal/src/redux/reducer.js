import { GET_CARS, GET_CAR_BY_ID } from "./actions";
import { GET_FILTERS } from "./actions";

const initialState = {
  allCars: [],
  singleCar: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        allCars: action.payload,
      };
    case GET_FILTERS:
      return {
        ...state,
        allCars: action.payload,
      };
    case GET_CAR_BY_ID:
      return {
        ...state,
        singleCar: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
