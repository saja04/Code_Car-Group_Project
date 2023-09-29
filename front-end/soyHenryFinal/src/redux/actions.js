import { GET_VEHICLES } from './types';

export const getVehicles = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://codecar.onrender.com/cars');
      const data = await response.json();

    

      dispatch({
        type: GET_VEHICLES,
        payload: data,
      });
    } catch (error) {
      console.error('Error al obtener vehículos:', error);
    }
  };
};
