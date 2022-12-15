import { connect } from 'react-redux';
import { setUsersAC } from '../../../dataBase/reducers/usersPageReducer';
import UsersList from './UsersList';

export const UsersListContainer = connect(
  (state) => {
    return {
      usersID: state.UsersPage.users.map(item => item.id),
    }
  },
  {
    setUsersAC,
  }
)(UsersList);
