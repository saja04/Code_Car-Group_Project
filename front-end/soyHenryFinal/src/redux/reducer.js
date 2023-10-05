import { DELETE_CAR, GET_CARS, GET_CAR_BY_ID, GET_CAR_BY_NAME } from "./actions";
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
        return{
          ...state,
          allCars: action.payload,
        };
        case GET_CAR_BY_ID:
          console.log(action.payload);
          return{
            ...state,
            singleCar: action.payload,
          };
          case DELETE_CAR:
            return{
              ...state,
              msg: action.payload
            };
            case GET_CAR_BY_NAME:
              return{
                ...state,
                allCars: action.payload
              }
    default:
      return state;
  }
};

export default rootReducer;
