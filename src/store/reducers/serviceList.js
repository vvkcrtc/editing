import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'

const initialState = [
{id: nanoid(), name: 'Замена стекла', price: 21000},
{id: nanoid(), name: 'Замена дисплея', price: 25000},
{id: nanoid(), name: 'Замена аккумулятора', price: 5000},
{id: nanoid(), name: 'Тестирование', price: 3000},
{id: nanoid(), name: 'Установка ПО', price: 4000},
{id: nanoid(), name: 'Обновление ОС', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price, id} = action.payload;
      console.log("action.payload",action.payload)
      console.log("serviceListReducer",name, price, id)
      
      if(id) {
        const item = state.find(el => el.id === id);
          if (item) {
            item.name = name
            item.price = Number(price);
          }

        return state;
      }
      else {
        return [...state, {id: nanoid(), name, price: Number(price)}];
      }
    case REMOVE_SERVICE:
      const idr = action.payload.id;
      return state.filter(service => service.id !== idr);
    default:
      return state;
  }
}