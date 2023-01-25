import React from 'react';
import ReactDOM from 'react-dom';
// import App from './dasarreact/App';
// import Variabel from './dasarreact/Variabel';
// import StateProps from './dasarreact/StateProps';
// import Map from './dasarreact/Map';
// import Lifecycle from './dasarreact/Lifecycle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud';

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);
