import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';




import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>

    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);
