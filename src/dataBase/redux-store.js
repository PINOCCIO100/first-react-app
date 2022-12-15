import { combineReducers, createStore } from "redux";
import usersMessagesReducer from './reducers/usersMessagesReducer';
import usersPostsReducer from './reducers/usersPostsReducer';
import usersProfileInfoReducer from "./reducers/usersProfileInfoReducer";
import usersPageReducer from './reducers/usersPageReducer';
// TODO: прочитать про configureStore и переделать проект потом под него

let reducers = combineReducers({
  PostsState: usersPostsReducer,
  DialogsState: usersMessagesReducer,
  ProfileState: usersProfileInfoReducer,
  UsersPage: usersPageReducer,
});

let store = createStore(reducers);
//TODO: Удалить
window.store = store;

export default store;