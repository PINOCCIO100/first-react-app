const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_PAGE_SIZE = 'SET-PAGE-SIZE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

let initialState = {
  users: [],
  pageSize: 3,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false,
}

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users
          .map(user => user.id !== action.payload.userID ? user : { ...user, followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users
          .map(user => user.id !== action.payload.userID ? user : { ...user, followed: false }),
      };
    case SET_USERS:
      // action.payload.init - признак, нужный для загрузки 
      // пользователей  при создании компонента (во избежание двойного рендера) 
      return {
        ...state,
        users:
          action.payload.init ?
            [...action.payload.users] :
            [...state.users, ...action.payload.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload.totalCount,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload.pageSize,
      };
    default:
      return state;
  }
}
export default usersPageReducer;


export const follow = (userID) => ({
  type: FOLLOW,
  payload: { userID }
})
export const unfollow = (userID) => ({
  type: UNFOLLOW,
  payload: { userID }
})
export const setUsers = (users, init = false) => ({
  type: SET_USERS,
  payload: { init, users }
})
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: { page }
})
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: { isFetching }
})
export const setTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  payload: { totalCount }
})
export const setPageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  payload: { pageSize }
})