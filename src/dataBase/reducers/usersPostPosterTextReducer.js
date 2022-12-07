const SET_POST_POSTER_TEXT = 'SET-POST-POSTER-TEXT';

export const setPostPosterTextActionCreator = (text) => ({
  type: SET_POST_POSTER_TEXT,
  text: text,
});

const usersPostPosterTextReducer = (state, action) => {
  const neWstate = {
    usersPostPosterText: { ...state.usersPostPosterText }
  }

  const curUsID = state.currentUserID;

  switch (action.type) {
    case SET_POST_POSTER_TEXT:
      neWstate.usersPostPosterText[curUsID] = action.text;
      return neWstate;
    default:
      return state;
  }
}
export default usersPostPosterTextReducer