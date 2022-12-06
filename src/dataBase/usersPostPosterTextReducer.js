const GET_POST_POSTER_TEXT = 'GET-POST-POSTER-TEXT';
const SET_POST_POSTER_TEXT = 'SET-POST-POSTER-TEXT';

const usersPostPosterTextReducer = (state, action) => {
  const {
    currentUserID: { id: curUsID },
    usersPostPosterText,
  } = state;

  switch (action.type) {
    //Работа с инпутом в постах
    case GET_POST_POSTER_TEXT:
      return usersPostPosterText.take(curUsID);
    case SET_POST_POSTER_TEXT:
      usersPostPosterText.edit(curUsID, action.text);
      break;
    default:
      break;
  }
  return usersPostPosterText;
}
export default usersPostPosterTextReducer