import React, {setSost} from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';


function ServiceAdd(props) {
  let item = useSelector(state => state.serviceAdd);
  
  const dispatch = useDispatch();
  
  const handleChange = evt => {
    const {name, value} = evt.target;
    
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price));
  }

  const handleCancel = () => {
    dispatch(changeServiceField("",""));
  }
  console.log(item);

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit'>Save</button>
      <button  onClick={handleCancel}>Cancel</button>
    </form>
  )
}



export default ServiceAdd;