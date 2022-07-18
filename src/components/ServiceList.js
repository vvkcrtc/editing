import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeService, changeServiceField, selectService } from '../store/actions/actionCreators';


function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
const filtered = []

const [fValue, setFilterValue] = useState('')

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (obj) => {
    dispatch(changeServiceField("name",obj.name ));
    dispatch(changeServiceField("price",obj.price ));
    dispatch(selectService(obj.id));
  }


  //items.map(el =>  {
    for(let i = 0; i < items.length; i++) {
      if (fValue==='' || items[i].name.includes(fValue)){
      filtered.push(items[i])
    }
  }

  return (
    <div>
      <hr/>
      <p>Фильтр</p>
      <input name='filter' onChange={e => setFilterValue(e.target.value)} value={fValue} />
      <ul>
        {filtered.map(o => <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>✕</button>
          <button onClick={() => handleEdit(o)}>Edit</button>
        </li>)}
      </ul>
    </div>
  )
}

export default ServiceList;