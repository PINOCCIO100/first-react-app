import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './dataBase/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Запускаем Mock Service Worker для эмуляции эндпоинтов сервера
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App store={store} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);






