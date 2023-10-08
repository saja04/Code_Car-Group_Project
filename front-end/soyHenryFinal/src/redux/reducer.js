import {
  DELETE_CAR,
  GET_CARS,
  GET_CAR_BY_ID,
  GET_CAR_BY_NAME,
} from "./actions";
import { GET_FILTERS } from "./actions";
import {
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  LOGIN_USER,
  LOGIN_USER_FAILURE,
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
    case REGISTER_USER:
      return {
        ...state,
        user: action.payload,
        registrationError: null,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        registrationError: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        loginError: null,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
