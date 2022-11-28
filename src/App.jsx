import React from 'react';
import './App.css';
import { Route, BrowserRouter, RouterProvider, createBrowserRouter, Routes } from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <Sidebar />
        <div className="App__content-wrapper">
          <Routes>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dialogs" element={<Dialogs />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
