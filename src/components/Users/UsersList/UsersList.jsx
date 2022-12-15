import { UserInfoCardContainer } from './UserInfoCard/UserInfoCardContainer';
import s from './UsersList.module.css';
import axios from 'axios';
import { useEffect } from 'react';

let key = 55;

function UsersList({ usersID, setUsersAC }) {
  useEffect(() => {
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
  }, [])
  return (
    <div className={s.UsersList + " scrollBar"}>
      {
        usersID.map(userID => <UserInfoCardContainer key={key++} userID={userID} />)
      }
    </div>
  );
}

export default UsersList;