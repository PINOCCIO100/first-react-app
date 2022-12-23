const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH = 'SET-AUTH';

const initialState = {
  userID: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload.data,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };
    default:
      return state;
  }
}

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: { isFetching }
});
export const setUserData = (userID, email, login) => ({
  type: SET_USER_DATA,
  payload: {
    data: { userID, email, login }
  }
});
export const setIsAuth = (isAuth) => ({
  type: SET_AUTH,
  payload: { isAuth }
});
