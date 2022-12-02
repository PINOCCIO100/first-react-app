// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { state, actions } from './dataBase/state';
// import { BrowserRouter } from 'react-router-dom';

import { rerender } from './render';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App state={state} actions={actions} />
//     </BrowserRouter>
//   </React.StrictMode>
// );

rerender(state, actions);



