import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + JSON.parse(localStorage.getItem('user'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
