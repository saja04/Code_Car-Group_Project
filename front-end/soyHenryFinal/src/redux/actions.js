import { GET_VEHICLES } from "./types";
import axios from "axios";

export const getVehicles = () => {
  return async (dispatch) => {
    try {
      const response = await axios("https://codecar.onrender.com/cars");

      return dispatch({
        type: GET_VEHICLES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener vehículos:", error);
    }
  };
};
