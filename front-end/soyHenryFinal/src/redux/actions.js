import axios from "axios";

export const GET_CARS = "GET_CARS";
export const GET_FILTERS = "GET_FILTERS";
export const GET_CAR_BY_ID = "GET_CAR_BY_ID";
export const DELETE_CAR = "DELETE_CAR";
export const GET_CAR_BY_NAME = "GET_CAR_BY_NAME"
export const REGISTER_USER = "REGISTER_USER"
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE"
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const getCars = (divisa) => {
  return async (dispatch) => {
    const response = await axios.post("https://codecar.onrender.com/cars", {'order': {'value':'car_marca','sequence': 'ASC'}});
    console.log(response.data);
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
  return async (dispatch) =>{
    const response = await axios(`https://codecar.onrender.com/carsDelete/${id}`)
    const data = response.data;
    return dispatch({
      type: DELETE_CAR,
      payload: data,
    })
  }
};

export const getCarByName = (modelo) => {
  return async(dispatch) => {
    const response = await axios(`https://codecar.onrender.com/carsName/?modelo=${modelo}`);
    const data = response.data
    if(data.error) return alert('auto no encontrado! intenta cambiar la busqueda')
    else

    return dispatch({
      type: GET_CAR_BY_NAME,
      payload: data.car,
    })


  }
}

export const registerUser = (name, email, password) => async (dispatch) => {
  try {

    const response = await axios.post(
      (`https://codecar.onrender.com/signup`),
      { name, email, password }
    );
    

    dispatch({
      type: "REGISTER_USER",
      payload: response.data.user,
    });
    alert("¡Se ha registrado exitosamente!");
  } catch (error) {
    dispatch({
      type: "REGISTER_FAILURE",
      payload: error,
    });
  }
};

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://codecar.onrender.com/login/password",
      {
        username: username,
        password: password
      }
    );
    console.log(response.data);
    dispatch({
      type: LOGIN_USER,
      payload: response.data.user,
    });
    alert("¡Se ha logeado exitosamente!");
  } catch (error) {
    
    console.error("Error en la solicitud:", error);
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: "Error en la solicitud", 
    });
  }
};

