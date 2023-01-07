import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { setUserProfile, setIsFetching } from '../../dataBase/reducers/usersProfileInfoReducer';

import Preloader from '../_sharedComponents/Preloader/Preloader';
import Profile from './Profile';
import { reqUserProfileInfo } from '../../api/reqUserProfileInfo';
import { reqUsersAvatar } from '../../api/reqUsersAvatar';


class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    reqUserProfileInfo(this.props.userID)
      .then(async response => {
        const avatarResponse = await reqUsersAvatar(this.props.userID);
        return { ...response.data, photo: avatarResponse.data }
      })
      .then(userProfile => {
        this.props.setUserProfile(userProfile);
        this.props.setIsFetching(false);
      })
  }
  render() {
    if (this.props.isFetching) return <Preloader />
    return <Profile
      {...this.props}
      userProfileInfo={this.props.userProfileInfo}
      setUserProfile={this.props.setUserProfile}
      userID={this.props.userID}
    />
  }
}

function ProfileContainerRouteParams(props) {
  const { userID } = useParams();
  return (
    <ProfileContainerAPI
      {...props}
      userID={userID ?? props.currentUserID}
    />
  )
}

export default connect(
  (state) => ({
    currentUserID: state.ProfileState.currentUserID,
    userProfileInfo: state.ProfileState.userProfileInfo,
    isFetching: state.ProfileState.isFetching,
  }),
  {
    setUserProfile,
    setIsFetching,
  }
)(ProfileContainerRouteParams)


