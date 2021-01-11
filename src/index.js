import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import ProductList from './ProductList'

ReactDOM.render(
  <React.StrictMode>
      {/* <App /> */} 
      <ProductList />
  </React.StrictMode>,
  document.getElementById('root')
);

