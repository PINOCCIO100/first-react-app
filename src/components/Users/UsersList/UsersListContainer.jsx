import { connect } from 'react-redux';
import { setUsers, setCurrentPage, setTotalCount, setIsFetching } from '../../../dataBase/reducers/usersPageReducer';
import React from 'react';

import UsersList from './UsersList';
import UsersListPagination from './UsersListPagination/UsersListPagination';
import Preloader from '../../_sharedComponents/Preloader/Preloader';
import { reqUsersList } from '../../../api/reqUsersList';
import { reqUsersAvatar } from '../../../api/reqUsersAvatar';

class UsersListContainer extends React.Component {

  componentWillMount() {
    this.getUsers(this.props.currentPage, this.props.pageSize);
  }
  getUsers = (currentPage, pageSize) => {
    this.props.setIsFetching(true);
    reqUsersList(pageSize, currentPage)
      .then(response => {
        this.props.setTotalCount(response.data.totalCount);
        return response.data.usersProfileInfo
      })
      .then(async usersList => {
        const res = await reqUsersAvatar(usersList.map(p => p.id));
        return usersList.map((p, ind) => ({ ...p, photo: res.data[ind] }))
      })
      .then(async usersList => {
        this.props.setUsers(usersList, true);
        this.props.setIsFetching(false);
      })
  }

  onClick = (page) => {
    this.props.setCurrentPage(page);
    this.getUsers(page, this.props.pageSize);
  }

  render() {
    // TODO: Вместо роли "обертки" UsersListContainer также выполняет функции презентационной компоненты
    // Надо исправить и вынести всю UI составляющую в презент. компоненту
    return (

      <>
        <UsersListPagination
          onClick={this.onClick}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage} />
        {
          this.props.isFetching ?
            <Preloader /> :
            <UsersList
              usersID={this.props.usersID}
            />
        }
      </>
    )
  }
}

export default connect(
  (state) => ({
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    usersID: state.UsersPage.users.map(item => item.id),
    isFetching: state.UsersPage.isFetching,
  }),
  {
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching,
  }
)(UsersListContainer);
