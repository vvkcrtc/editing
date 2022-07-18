import { legacy_createStore, combineReducers } from "redux";
import serviceListReducer from './reducers/serviceList';
import serviceAddReducer from './reducers/serviceAdd';


const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});
const store = legacy_createStore(reducer);
export default store;