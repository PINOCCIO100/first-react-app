import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
