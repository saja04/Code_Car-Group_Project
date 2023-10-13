import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const GET_CARS = "GET_CARS";
export const GET_FILTERS = "GET_FILTERS";
export const GET_CAR_BY_ID = "GET_CAR_BY_ID";
export const DELETE_CAR = "DELETE_CAR";
export const GET_CAR_BY_NAME = "GET_CAR_BY_NAME";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const GET_USERS = "GET_USERS";
export const GET_USER_INFO = "GET_USER_INFO";

export const getCars = (divisa) => {
  return async (dispatch) => {
    const response = await axios.post("https://codecar.onrender.com/cars", {
      order: { value: "car_marca", sequence: "ASC" },
      precio: divisa,
    });
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
      payload: data,
    });
  };
};

export const deleteCar = (id) => {
  return async (dispatch) => {
    const response = await axios(
      `https://codecar.onrender.com/carsDelete/${id}`
    );
    const data = response.data;
    return dispatch({
      type: DELETE_CAR,
      payload: data,
    });
  };
};

export const getCarByName = (input, divisa) => {
  return async (dispatch) => {
    const response = await axios(
      `https://codecar.onrender.com/carsName/?input=${input}&divisa=${divisa}`
    );
    const data = response.data.cars;
    console.log(data.cars);
    if (data.error)
      return alert("auto no encontrado! intenta cambiar la busqueda");
    else
      return dispatch({
        type: GET_CAR_BY_NAME,
        payload: data,
      });
  };
};

export const changeCurrency = (divisa) => {
  return async (dispatch) => {
    return dispatch({
      type: CHANGE_CURRENCY,
      payload: divisa,
    });
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const response = await axios.get("https://codecar.onrender.com/users");
    const data = response.data;
    return dispatch({
      type: GET_USERS,
      payload: data,
    });
  };
};

export const getUserInfo = () => {
  return async (dispatch) => {
    const { getAccessTokenSilently } = useAuth0();
    const token = await getAccessTokenSilently();
    console.log(token);
    const response = await axios.get("https://codecar.onrender.com/userInfo", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    console.log(data);
    return dispatch({
      type: GET_USER_INFO,
      payload: data,
    });
  };
};
