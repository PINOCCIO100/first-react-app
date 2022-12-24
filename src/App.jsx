import './App.css';
import './UI/UI.css';
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
// import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/SideBar/Sidebar';
// import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import ProfileRouter from './components/Profile/ProfileRouter';
import { connect } from 'react-redux';
import { setIsAuth } from './dataBase/reducers/authReducer';


function App({ isAuth, setIsAuth }) {
  return (
    <div className="App__wrapper">
      <HeaderContainer />
      <Sidebar />
      <div className="App__content-wrapper">
        <Routes>
          {/* <Route index element={<ProfileRouter me />} /> */}
          <Route path="profile/*" element={<ProfileRouter />} />
          {/* <Route path="dialogs/*" element={<Dialogs store={store} />} /> */}
          {/* <Route path="news/*" element={<News />} /> */}
          {/* <Route path="music/*" element={<Music />} /> */}
          <Route path="find-users/*" element={<Users />} />
          {/* <Route path="settings/*" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default connect((state) => ({ isAuth: state.Auth.isAuth }), { setIsAuth })(App);
