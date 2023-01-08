const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_USER_DATA = 'SET-USER-DATA';
const SET_AUTH = 'SET-AUTH';

const initialState = {
  userData: {
    userID: null,
    email: null,
    password: null,
  },
  isAuth: false,
  isFetching: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: { ...action.payload.userData },
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
export const setUserData = (userID, email, password) => ({
  type: SET_USER_DATA,
  payload: {
    userData: { userID, email, password }
  }
});
export const setIsAuth = (isAuth) => ({
  type: SET_AUTH,
  payload: { isAuth }
});
