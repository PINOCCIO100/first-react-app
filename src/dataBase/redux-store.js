import { combineReducers, createStore } from "redux";
import usersMessagesReducer from './reducers/usersMessagesReducer';
import usersPostsReducer from './reducers/usersPostsReducer';
import usersProfileInfoReducer from "./reducers/usersProfileInfoReducer";

// TODO: прочитать про configureStore и переделать проект потом под него

let reducers = combineReducers({
  PostsState: usersPostsReducer,
  DialogsState: usersMessagesReducer,
  ProfileState: usersProfileInfoReducer,
});

let store = createStore(reducers);

export default store;