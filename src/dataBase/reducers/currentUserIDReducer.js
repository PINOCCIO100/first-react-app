import { store } from "../store";
const SET_CURRENT_USER_ID = 'SET-CURRENT-USER-ID';

export const setCurretUserIDActionCreator = (userID) => ({
  type: SET_CURRENT_USER_ID,
  userID: userID,
});

const currentUserIDReducer = (state, action) => {
  const newState = {
    currentUserID: state.currentUserID,
  }
  switch (action.type) {
    // Смена текущего пользователя
    case SET_CURRENT_USER_ID:
      newState.currentUserID = action.userID;
      // TODO: избавиться от ререндера всего приложения
      store._rerenderApp();
      return newState;
    default:
      return state
  }
}

export default currentUserIDReducer