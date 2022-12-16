import s from './UsersListPagination.module.css';

let key = Date.now();

export default function UsersListPagination(props) {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);
  return (
    <ul className={s.UsersListPagination}>
      {
        pages.map((item) => (
          <li
            onClick={() => props.onClick(item)}
            key={key++}
            className={props.currentPage === item ? s.activePage : ""}
          >{item}</li>
        ))
      }
    </ul>
  );
}
