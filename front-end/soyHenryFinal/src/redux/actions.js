import axios from 'axios'


export const GET_CARS = "GET_CARS"



export const getCars = () => {
  return async (dispatch) => {
      const response = await axios('https://codecar.onrender.com/cars');
      const data = response.data;

      return dispatch({
        type: GET_CARS,
        payload: data,
      });
  };
};
