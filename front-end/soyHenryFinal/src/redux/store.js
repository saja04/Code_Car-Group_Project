import { createStore, combineReducers, applyMiddleware } from 'redux';
import { vehicleReducer } from "./reducer";
import thunk from 'redux-thunk'; 

const rootReducer = combineReducers({
  vehicles: vehicleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); 

export default store;
