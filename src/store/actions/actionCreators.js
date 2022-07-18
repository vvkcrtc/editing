import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, RESET_SERVICE_FIELD,SELECT_SERVICE } from './actionTypes';

export function addService(name, price, id) {
  return {type: ADD_SERVICE, payload: {name, price, id}};
}
export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}
export function changeServiceField(name, value) {

  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function resetServiceField() {
   return {type: RESET_SERVICE_FIELD, payload: null }
}

export function selectService(id) {
  return {type: SELECT_SERVICE, payload: {id}};
}
