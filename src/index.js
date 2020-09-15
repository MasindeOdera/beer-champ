import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './context/appStore.js';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
