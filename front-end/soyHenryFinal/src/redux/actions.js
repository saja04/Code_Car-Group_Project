import axios from "axios";

export const GET_CARS = "GET_CARS";
export const GET_FILTERS = "GET_FILTERS";
export const GET_CAR_BY_ID = "GET_CAR_BY_ID";
export const DELETE_CAR = "DELETE_CAR";

export const getCars = () => {
  return async (dispatch) => {
    const response = await axios.post("https://codecar.onrender.com/cars");
    const data = response.data;

    return dispatch({
      type: GET_CARS,
      payload: data,
    });
  };
};

export const getFilters = (filters) => {
  return async (dispatch) => {
    const response = await axios.post(
      "https://codecar.onrender.com/cars",
      filters
    );
    const data = response.data;
    console.log(data);
    return dispatch({
      type: GET_FILTERS,
      payload: data,
    });
  };
};

export const getCarById = (id) => {
  return async (dispatch) => {
    const response = await axios(`https://codecar.onrender.com/cars/${id}`);
    const data = response.data;
    console.log(data);

    return dispatch({
      type: GET_CAR_BY_ID,
      payload: data.car,
    });
  };
};

export const deleteCar = (id) => {
  return async (dispatch) =>{
    const response = await axios(`https://codecar.onrender.com/carsDelete/${id}`)
    const data = response.data;
    return dispatch({
      type: DELETE_CAR,
      payload: data,
    })
  }
}
