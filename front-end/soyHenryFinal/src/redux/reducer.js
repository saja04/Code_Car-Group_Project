import { GET_VEHICLES, ADD_VEHICLE } from "./types";

const initialState = {
  vehicles: [],
};

export const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload,
      };

    case ADD_VEHICLE:
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload],
      };
    default:
      return state;
  }
};
