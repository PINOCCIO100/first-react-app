import { usersPosts } from "../usersPosts/usersPosts";
import { usersPostPosterText } from '../usersPosts/usersPosts';

const CREATE_POST = 'CREATE-POST';
const SET_POST_POSTER_TEXT = 'SET-POST-POSTER-TEXT';

let initialState = {
  usersPostPosterText,
  usersPosts,
};

const usersPostsReducer = (state = initialState, action) => {
  // let newState = {
  //   usersPostPosterText: { ...state.usersPostPosterText },
  //   usersPosts: { ...state.usersPosts },
  // };

  switch (action.type) {
    case CREATE_POST: {
      // если пустой пост - не выводим его
      if (state.usersPostPosterText[action.curUsID] === '') return state;
      //  Создание поста на свое стене 
      // TODO: лайки и дизлайки нужно пропустить через BLL. Сейчас они при ререндере обнуляются 
      const newState = {
        ...state,
        usersPostPosterText: { ...state.usersPostPosterText },
        usersPosts: { ...state.usersPosts },
      };
      const messageID = newState.usersPosts[action.curUsID].length + 1;
      newState.usersPosts[action.curUsID] = [
        ...newState.usersPosts[action.curUsID],
        {
          messageID: messageID,
          userID: action.curUsID,
          message: newState.usersPostPosterText[action.curUsID],
          time: 1,
          rating: {
            likes: 0,
            dislikes: 0,
          }
        }
      ];
      // обнуляем поле ввода после добавления нового поста на стороне BLL
      newState.usersPostPosterText[action.curUsID] = '';
      return newState;
    }
    case SET_POST_POSTER_TEXT: {
      const newState = {
        ...state,
        usersPostPosterText: { ...state.usersPostPosterText },
      };
      newState.usersPostPosterText[action.curUsID] = action.text;
      return newState;
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (curUsID) => ({
  type: CREATE_POST,
  curUsID: curUsID,
});

export const setPostPosterTextActionCreator = (curUsID, text) => ({
  type: SET_POST_POSTER_TEXT,
  curUsID: curUsID,
  text: text,
});

export default usersPostsReducer



