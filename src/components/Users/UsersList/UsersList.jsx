import React from 'react';
import axios from 'axios';
import s from './UsersList.module.css';

import { UserInfoCardContainer } from './UserInfoCard/UserInfoCardContainer';

let key = 55;

function UsersListFunction({ usersID, setUsersAC }) {
  let getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsersAC(response.data.map((item, index) => {
          return {
            ...item,
            // photo: `https://picsum.photos/seed/${index}/300/300`,
            followed: index % 2 === 0,
          }
        }), true);
      })
  }
  return (
    <div className={s.UsersList + " scrollBar"}>
      <button onClick={getUsers} className="UsersList__button">Get users</button>
      {
        usersID.map(userID => <UserInfoCardContainer key={key++} userID={userID} />)
      }
    </div>
  );
}


const getUsersFromPage = (response, props) => {
  const { currentPage, pageSize } = props;
  return response.slice(pageSize * (currentPage - 1) + 1, pageSize * currentPage + 1)
}

class UsersListClass extends React.Component {
  componentWillMount() {
    this.getUsers(this.props.currentPage);
  }

  getUsers = (currentPage) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // при каждом ajax обновляем totalCountUsers
        this.props.setTotalCountAC(response.data.length);
        return response.data.slice(
          // jsonplaceholder.typicode.com/users не поддерживает частичный вывод, поэтом у сделал доп логику   
          this.props.pageSize * (currentPage - 1),
          this.props.pageSize * currentPage)
      })
      .then(usersList => {
        this.props.setUsersAC(
          usersList.map((item, index) => ({ ...item, followed: Boolean(index % 2) })), true);
      });
  }

  onClick = (item) => {
    this.props.setCurrentPageAC(item);
    this.getUsers(item);
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = []; 
    for (let i = 1; i <= pagesCount; i++) pages.push(i); 
    return (
      < div className={s.UsersList} >
        <ul className={s.UserList__pages}>
          {
            pages.map((item) => (
              <li
                onClick={() => this.onClick(item)}
                key={key++}
                className={this.props.currentPage === item ? s.activePage : ""}
              >{item}</li>
            ))
          }
        </ul>
        <div className={s.UserList__users + " scrollBar"}>
          {
            this.props.usersID.map(id => <UserInfoCardContainer key={key++} userID={id} />)
          }
        </div>
      </div >
    )
  }
}

export default UsersListClass;
// export default UsersListFunction;