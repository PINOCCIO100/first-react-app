const CREATE_POST = 'CREATE-POST';

const usersPostsReducer = (state, action) => {
  let {
    currentUserID,
    usersPostPosterText,
    usersPosts,
  } = state;
  console.log(usersPostPosterText);
  usersPostPosterText = { ...usersPostPosterText }
  console.log(usersPostPosterText);
  usersPosts = { ...usersPosts }

  const curUsID = currentUserID.id;

  switch (action.type) {
    case CREATE_POST:
      // если пустой пост - не выводим его
      if (usersPostPosterText.take(curUsID) === '') return state;
      //  Создание поста на свое стене 
      // TODO: лайки и дизлайки нужно пропустить через BLL. Сейчас они при ререндере обнуляются 
      const messageID = usersPosts.list[curUsID].length + 1;
      usersPosts.list[curUsID].push({
        messageID: messageID,
        userID: curUsID,
        message: usersPostPosterText.take(curUsID),
        time: 1,
        rating: {
          likes: 0,
          dislikes: 0,
        }
      });
      // обнуляем поле ввода после добавления нового поста на стороне BLL
      usersPostPosterText.edit(curUsID, '');
      return  { currentUserID, usersPosts, usersPostPosterText };

    default:
      return state;
  }
}

export default usersPostsReducer