import { connect } from 'react-redux';
import { setUsers, setCurrentPage, setTotalCount, setIsFetching } from '../../../dataBase/reducers/usersPageReducer';
import React from 'react';
import axios from 'axios';

import UsersList from './UsersList';
import UsersListPagination from './UsersListPagination/UsersListPagination';
import Preloader from '../../_sharedComponents/Preloader/Preloader';

class UsersListContainer extends React.Component {

  componentWillMount() {
    this.getUsers(this.props.currentPage);
  }

  getUsers = (currentPage) => {
    this.props.setIsFetching(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // при каждом ajax обновляем totalCountUsers
        this.props.setTotalCount(response.data.length);
        return response.data.slice(
          // jsonplaceholder.typicode.com/users не поддерживает частичный вывод, поэтому сделал доп. логику   
          this.props.pageSize * (currentPage - 1),
          this.props.pageSize * currentPage)
      })
      // .then(usersList => new Promise((resolve) => {
      //   setTimeout(() => resolve(usersList), 300)
      // }))
      .then(usersList => {
        this.props.setIsFetching(false);
        this.props.setUsers(
          usersList.map((item, index) => ({ ...item, followed: Boolean(index % 2) })), true);
      });
  }

  onClick = (page) => {
    this.props.setCurrentPage(page);
    this.getUsers(page);
  }

  render() {
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
  (state) => {
    return {
      pageSize: state.UsersPage.pageSize,
      totalUsersCount: state.UsersPage.totalUsersCount,
      currentPage: state.UsersPage.currentPage,
      usersID: state.UsersPage.users.map(item => item.id),
      isFetching: state.UsersPage.isFetching,
    }
  },
  {
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching,
  }
)(UsersListContainer);
