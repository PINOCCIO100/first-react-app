import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import './UI/UI.css';

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
import AuthContainer from './components/Auth/AuthContainer';
import TrailingPage from './components/TrailingPage/TrailingPage';


//TODO: Сделать редирект на /login если !isAuth

function App({ isAuth }) {
  return (
    <div className="App__wrapper">
      <HeaderContainer />
      <Sidebar />
      <div className="App__content-wrapper">
        {
          !isAuth ?
            <AuthContainer /> :
            < Routes >
              <Route path='/*' element={<ProfileRouter />} />
              <Route path="login/*" element={<AuthContainer />} />
              <Route path="profile/*" element={<ProfileRouter />} />
              <Route path="find-users/*" element={<Users />} />
              <Route path="dialogs/*" element={null} />
              <Route path="news/*" element={null} />
              <Route path="music/*" element={null} />
              <Route path="settings/*" element={null} />
              <Route path='*' element={<TrailingPage />} />
            </Routes >
        }
      </div>
    </div>
  )
}

export default connect((state) => ({ isAuth: state.Auth.isAuth }))(App);