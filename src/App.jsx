import './App.css';
import './UI/UI.css';
import { Route, Routes } from 'react-router-dom';

// import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import ProfileContainer from './components/Profile/ProfileContainer';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import ProfileRouter from './components/Profile/ProfileRouter';

function App({ store }) {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Header />
        <Sidebar />
        <div className="App__content-wrapper">
          <Routes>
            {/* <Route index element={<ProfileRouter me />} /> */}
            <Route path="profile/*" element={<ProfileRouter />} />
            {/* <Route path="dialogs/*" element={<Dialogs store={store} />} />
            <Route path="news/*" element={<News />} />
            <Route path="music/*" element={<Music />} /> */}
            <Route path="find-users/*" element={<Users />} />
            <Route path="settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
