import { connect } from 'react-redux';
import { follow, unfollow } from '../../../../dataBase/reducers/usersPageReducer';
import UserInfoCard from './UserInfoCard';

export const UserInfoCardContainer = connect(
  (state, ownProps) => {
    let user;
    state.UsersPage.users.forEach(item => {
      if (item.id === ownProps.userID) user = item
    })
    return { user };
  },
  { follow, unfollow }
)(UserInfoCard);
