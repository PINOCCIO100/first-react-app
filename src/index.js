import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { state, actions, subscriber } from './dataBase/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} actions={actions} />
      </BrowserRouter>
    </React.StrictMode>
  );

}

rerenderEntireTree();

subscriber(rerenderEntireTree());




