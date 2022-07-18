import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/index ';
import {Provider} from 'react-redux';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ServiceAdd />
    <ServiceList />
  </Provider>
  
);

