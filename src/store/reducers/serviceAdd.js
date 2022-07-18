import {CHANGE_SERVICE_FIELD,RESET_SERVICE_FIELD,SELECT_SERVICE} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  id: null
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
//      console.log("serviceAddReducer action.payload",action.payload)
      return {...state, [name]: value};
       
    case RESET_SERVICE_FIELD:
      return initialState;
    
    case SELECT_SERVICE:
      const {id} = action.payload
      return {...state, id}
    
    default:
      return state;
  }
}