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
import Settings from './components/Settings/Settings';
import Users from './components/Users/Users';
import ProfileRouter from './components/Profile/ProfileRouter';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setIsAuth } from './dataBase/reducers/authReducer';

const buttonStyle = {
  margin: '15px',
  marginLeft: '90px',
  padding: '5px',
  borderRadius: '5px',
  fontSize: '20px',
  fontWeight: 700,
  position: 'absolute'
}
const inputStyle = {
  position: 'absolute',
}

function App({ isAuth, setIsAuth }) {
  axios.get('/api/auth/me').then(res => console.log(res.data));
  useEffect(() => {
    axios.get('/api/auth/me').then(res => {
      res.data ? setIsAuth(true) : setIsAuth(false);
    })
  }, []);

  const logout = async (e) => {
    e.preventDefault(true);
    const res = await axios.get('/api/auth/logout');
    if (res.status === 200) setIsAuth(false);
  }
  const login = async (e) => {
    e.preventDefault(true);
    const res = await axios.post('/api/auth', { login: 'Rustam_N', password: '12345' });
    res.status === 200 ? setIsAuth(true) : await logout();
  }

  return (
    <div className="App">
      {
        isAuth ?
          <button onClick={(e) => logout(e)} style={buttonStyle}>Logout</button> :
          <button onClick={(e) => login(e)} style={buttonStyle}>Login</button>
      }
      <div className="App__wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="App__content-wrapper">
          {
            isAuth ?
              (<Routes>
                {/* <Route index element={<ProfileRouter me />} /> */}
                <Route path="profile/*" element={<ProfileRouter />} />
                {/* <Route path="dialogs/*" element={<Dialogs store={store} />} />
                <Route path="news/*" element={<News />} />
                <Route path="music/*" element={<Music />} /> */}
                <Route path="find-users/*" element={<Users />} />
                <Route path="settings/*" element={<Settings />} />
              </Routes>) :
              'Error'
          }
        </div>
      </div>
    </div >
  );
}

export default connect((state) => ({ isAuth: state.Auth.isAuth }), { setIsAuth })(App);
