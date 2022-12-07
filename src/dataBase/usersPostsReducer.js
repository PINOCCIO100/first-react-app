const CREATE_POST = 'CREATE-POST';

const usersPostsReducer = (state, action) => {
  let newState = {
    usersPosts: { ...state.usersPosts },
    usersPostPosterText: { ...state.usersPostPosterText }
  };
  const curUsID = state.currentUserID.id;

  switch (action.type) {
    case CREATE_POST:
      // если пустой пост - не выводим его
      if (newState.usersPostPosterText[curUsID] === '') return state;
      //  Создание поста на свое стене 
      // TODO: лайки и дизлайки нужно пропустить через BLL. Сейчас они при ререндере обнуляются 
      const messageID = newState.usersPosts[curUsID].length + 1;
      newState.usersPosts[curUsID].push({
        messageID: messageID,
        userID: curUsID,
        message: newState.usersPostPosterText[curUsID],
        time: 1,
        rating: {
          likes: 0,
          dislikes: 0,
        }
      });

      // обнуляем поле ввода после добавления нового поста на стороне BLL
      newState.usersPostPosterText[curUsID] = '';
      return newState
    default:
      return state;
  }
}

export default usersPostsReducer