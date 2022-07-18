import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, resetServiceField } from '../store/actions/actionCreators';


function ServiceAdd(props) {
  const item = useSelector(state => state.serviceAdd);
  
  const dispatch = useDispatch();
  
  const handleChange = evt => {
    const {name, value} = evt.target;
    
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price, item.id));
    dispatch(resetServiceField());
  }

  const handleCancel = () => {
  
        dispatch(resetServiceField());
  }
  console.log(item);

  return (
    <form onSubmit={handleSubmit} onReset={handleCancel}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit'>Save</button>
      <button type='reset' >Cancel</button>
    </form>
  )
}

//onClick={() => dispatch(changeServiceField(null,""))}

export default ServiceAdd;