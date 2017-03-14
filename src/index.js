import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import logo from '../assets/logo-avast.png';

const App = () => (
  <div>
    <h1>Avast Stack</h1>
    <img src={logo} />
  </div>
);

ReactDom.render(
  <App />,
  window.document.getElementById('root')
);
