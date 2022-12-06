import { store } from "./store";
const SET_CURRENT_USER_ID = 'SET-CURRENT-USER-ID';

const currentUserIDReducer = (state, action) => {
  const {
    currentUserID,
  } = state;

  switch (action.type) {
    // Смена текущего пользователя
    case SET_CURRENT_USER_ID:
      currentUserID.setID(action.userID);
      // TODO: избавиться от ререндера всего приложения
      store._rerenderApp();
      break;

    default:
      break;
  }
  return currentUserID;
}

export default currentUserIDReducer