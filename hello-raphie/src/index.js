import React from 'react';
import ReactDOM from 'react-dom';
import DoggyProfileForm from './client/components/DoggyProfileForm';
import Header from './client/components/Header';

import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <Header />
    <DoggyProfileForm />
  </React.StrictMode>,
  document.getElementById('root')
);


