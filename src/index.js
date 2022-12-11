import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reduxStore from './dataBase/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext } from './components/Profile/_contexts/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={reduxStore}>
          <App store={reduxStore} />
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

}

rerenderEntireTree();

// store.subscribe(rerenderEntireTree);





