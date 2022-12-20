import { usersProfileInfoDefault } from "../usersProfileInfo/usersProfileInfo";

const SET_CURRENT_USER_ID = 'SET-CURRENT-USER-ID';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

let initialState = {
  currentUserID: 4206902,
  userProfileInfo: usersProfileInfoDefault[1],
  isFetching: false,
}

const usersProfileInfoReducer = (state = initialState, action) => {
  const newState = {
    currentUserID: state.currentUserID,
    usersProfileInfo: { ...state.usersProfileInfo },
  }
  switch (action.type) {
    // Смена текущего пользователя
    case SET_CURRENT_USER_ID:
      newState.currentUserID = action.userID;
      return newState;
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfileInfo: action.payload.profile,
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching,
      }
    default:
      return state
  }
}

export const setCurrentUserID = (userID) => ({
  type: SET_CURRENT_USER_ID,
  userID: userID,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: { profile },
});

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: { isFetching },
})

export default usersProfileInfoReducer

