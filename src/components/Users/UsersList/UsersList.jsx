import React from 'react';
import s from './UsersList.module.css';

import { UserInfoCardContainer } from './UserInfoCard/UserInfoCardContainer';

let key = Date.now();

const UsersList = ({ usersID }) => {
  return (
    < div className={s.UsersList} >
      <div className={s.UserList__users + " scrollBar"}>
        {
          usersID.map(id => <UserInfoCardContainer key={key++} userID={id} />)
        }
      </div>
    </div >
  )
}

export default UsersList;
