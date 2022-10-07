import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
// import App from './App';
// import { createStore } from 'redux';
// import rootReducer from './modules';
import { store } from './App/store';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './styles/tailwindcss.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
