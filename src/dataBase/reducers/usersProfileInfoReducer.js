import { usersProfileInfo, currentUserID } from "../usersProfileInfo/usersProfileInfo";

const SET_CURRENT_USER_ID = 'SET-CURRENT-USER-ID';

let initialState = {
  currentUserID,
  usersProfileInfo,
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
      // TODO: избавиться от ререндера всего приложения
      // store._rerenderApp();
      return newState;
    default:
      return state
  }
}

export const setCurretUserIDActionCreator = (userID) => ({
  type: SET_CURRENT_USER_ID,
  userID: userID,
});

export default usersProfileInfoReducer

