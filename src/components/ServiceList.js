import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeService, changeServiceField } from '../actions/actionCreators';


function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (obj) => {
  //  dispatch(selectService(el));
  dispatch(changeServiceField(obj.name, obj.price));
  }

  return (
    <ul>
      {items.map(o => <li key={o.id}>
        {o.name} {o.price}
        <button onClick={() => handleRemove(o.id)}>✕</button>
        <button onClick={() => handleEdit(o)}>Edit</button>
      </li>)}
    </ul>
  )
}


export default ServiceList;