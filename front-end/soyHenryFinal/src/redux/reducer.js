import {
  CHANGE_CURRENCY,
  DELETE_CAR,
  GET_CARS,
  GET_CAR_BY_ID,
  GET_CAR_BY_NAME,
  GET_FILTERS,
} from "./actions";

const initialState = {
  allCars: [],
  singleCar: null,
  divisa: "car_precio_usd", //trae precio en ars
  user: null,
  registrationError: null,
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
      state.singleCar = null;
      console.log(action.payload);
      return {
        ...state,
        singleCar: action.payload,
      };
    case DELETE_CAR:
      return {
        ...state,
        msg: action.payload,
      };
    case GET_CAR_BY_NAME:
      return {
        ...state,
        allCars: action.payload,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        divisa: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
