import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { setUserProfile, setIsFetching, setCurrentURLParam } from '../../dataBase/reducers/usersProfileInfoReducer';
import { usersProfileInfoDefault } from '../../dataBase/usersProfileInfo/usersProfileInfo';
import { userProfileTransformer } from '../../dataBase/utility/responseTransformLayer/userProfileTransformer';

import Preloader from '../_sharedComponents/Preloader/Preloader';
import Profile from './Profile';


class ProfileContainerAPI extends React.Component {
  constructor(props) {
    super(props);
    this.userID = this.props.userID ?? this.props.currentUserID
  }
  componentDidMount() {
    //Проверяем - есть ли полученное ID в списке id наших дефолтных профилей 420690X  
    if (usersProfileInfoDefault.some(p => +p.id === +this.userID)) {
      this.props.setUserProfile(usersProfileInfoDefault.find(p => p.id == this.userID));
      return;
    }
    // В случае если профиль не дефолтный, то делаем get запрос на сервер 
    this.props.setIsFetching(true);
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.userID}`)
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setUserProfile(userProfileTransformer(response.data));
      });
  }
  componentDidUpdate() {
  }
  render() {
    return (
      <>
        {
          this.props.isFetching ?
            <Preloader /> :
            <Profile
              {...this.props}
              userProfileInfo={this.props.userProfileInfo}
              setUserProfile={this.props.setUserProfile}
              userID={this.userID}
            />
        }
      </>
    )
  }
}

function ProfileContainerParams(props) {
  const { userID } = useParams();
  return (
    <ProfileContainerAPI
      {...props}
      userID={userID}
    />
  )
}

export default connect(
  (state) => {
    return {
      currentUserID: state.ProfileState.currentUserID,
      userProfileInfo: state.ProfileState.userProfileInfo,
      isFetching: state.ProfileState.isFetching,
    }
  },
  {
    setUserProfile,
    setIsFetching,
  }
)(ProfileContainerParams)


