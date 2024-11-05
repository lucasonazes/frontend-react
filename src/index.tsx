import React from 'react';
import ReactDOM from 'react-dom/client';
import Cep from './Cep';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cep />
  </React.StrictMode>
);