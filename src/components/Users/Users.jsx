import s from './Users.module.css';
import { UsersListContainer } from './UsersList/UsersListContainer';

function Users() {
  return (
    <div className={s.Users}>
      <UsersListContainer />
    </div>
  );
}

export default Users;