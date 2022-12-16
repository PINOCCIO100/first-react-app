const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

let initialState = {
  users: [],
  pageSize: 3,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
}

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users
          .map(user => user.id !== action.payload.userID ? user : { ...user, followed: true }),
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users
          .map(user => user.id !== action.payload.userID ? user : { ...user, followed: false }),
      }
    }
    case SET_USERS: {
      // action.payload.init - признак, нужный для загрузки 
      // пользователей  при создании компонента (во избежание двойного рендера) 
      return {
        ...state,
        users:
          action.payload.init ?
            [...action.payload.users] :
            [...state.users, ...action.payload.users],
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.page,
      }
    }
    case SET_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload.totalCount,
      }
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
      }
    }
    default:
      return state;
  }
}
export default usersPageReducer;


export const followAC = (userID) => {
  return {
    type: FOLLOW,
    payload: { userID },
  }
}
export const unfollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    payload: { userID },
  }
}
export const setUsersAC = (users, init = false) => {
  return {
    type: SET_USERS,
    payload: { init, users }
  }
}
export const setCurrentPageAC = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: { page }
  }
}
export const setIsFetchingAC = (isFetching) => {
  return {
    type: SET_IS_FETCHING,
    payload: { isFetching }
  }
}
export const setTotalCountAC = (totalCount) => {
  return {
    type: SET_TOTAL_COUNT,
    payload: { totalCount }
  }
}