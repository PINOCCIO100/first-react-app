import { connect } from 'react-redux';
import { setUsersAC, setCurrentPageAC, setTotalCountAC, setIsFetchingAC } from '../../../dataBase/reducers/usersPageReducer';
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
    this.props.setIsFetchingAC(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // при каждом ajax обновляем totalCountUsers
        this.props.setTotalCountAC(response.data.length);
        return response.data.slice(
          // jsonplaceholder.typicode.com/users не поддерживает частичный вывод, поэтому сделал доп. логику   
          this.props.pageSize * (currentPage - 1),
          this.props.pageSize * currentPage)
      })
      // .then(usersList => new Promise((resolve) => {
      //   setTimeout(() => resolve(usersList), 300)
      // }))
      .then(usersList => {
        this.props.setIsFetchingAC(false);
        this.props.setUsersAC(
          usersList.map((item, index) => ({ ...item, followed: Boolean(index % 2) })), true);
      });
  }

  onClick = (page) => {
    this.props.setCurrentPageAC(page);
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
    setUsersAC,
    setCurrentPageAC,
    setTotalCountAC,
    setIsFetchingAC,
  }
)(UsersListContainer);
