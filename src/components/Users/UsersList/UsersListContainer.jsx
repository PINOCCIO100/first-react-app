import { connect } from 'react-redux';
import { setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../../dataBase/reducers/usersPageReducer';
import UsersList from './UsersList';

export const UsersListContainer = connect(
  (state) => {
    return {
      pageSize: state.UsersPage.pageSize,
      totalUsersCount: state.UsersPage.totalUsersCount,
      currentPage: state.UsersPage.currentPage,
      usersID: state.UsersPage.users.map(item => item.id),
    }
  },
  {
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
  }
)(UsersList);
