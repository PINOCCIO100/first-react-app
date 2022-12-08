import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reduxStore from './dataBase/redux-store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App store={reduxStore} />
      </BrowserRouter>
    </React.StrictMode>
  );

}

rerenderEntireTree();

// store.subscribe(rerenderEntireTree);





