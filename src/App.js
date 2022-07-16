import React, {Fragment} from 'react';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

import './App.css';

function App() {
  return (
    <Fragment>
      <ServiceAdd />
      <ServiceList />
    </Fragment>
  );
}

export default App;
