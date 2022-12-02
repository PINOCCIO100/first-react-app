import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerender = (state, actions) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} actions={actions} />
      </BrowserRouter>
    </React.StrictMode>
  );
}