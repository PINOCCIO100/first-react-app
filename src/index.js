import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reduxStore from './dataBase/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { StoreContext } from './components/_contexts/StoreContext';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={reduxStore}>
          <StoreContext.Provider value={reduxStore}>
            <App store={reduxStore} />
          </StoreContext.Provider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

}

rerenderEntireTree();

// store.subscribe(rerenderEntireTree);





