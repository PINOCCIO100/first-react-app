import { React, useState } from 'react';
import s from './PostPoster.module.css';

function PostPoster({ addPost, store }) {
  const { usersPostPosterText, currentUserID } = store.state;
  const [currentText, setCurrentText] = useState(usersPostPosterText.take(currentUserID.id));

  const onInput = (e) => {
    // функция отрабатывает при вводе в textarea
    // сначала передаем содержимое textarea  в usersPostPosterText (BLL) c возмжностью использовать пред. значение prevValue
    usersPostPosterText.edit(currentUserID.id, e.target.value);
    // содержимое usersPostPosterText.list[id]  передаем обратно в textarea (UI), имеея возможность обработать его в BLL (FLUX)   
    setCurrentText(usersPostPosterText.take(currentUserID.id));
  }
  const onClick = () => {
    // добавляем наш пост по кнопке Send
    addPost();
    // обнуляем поле ввода на стороне UI через стэйт currentText, что заставлет перерендериться весь PostPoster
    setCurrentText(usersPostPosterText.take(currentUserID.id));
  }
  return (
    <div className={s.postPoster} >
      <textarea
        onInput={onInput}
        value={currentText}
        maxLength={256}
        className={s.postPoster__textArea}
        name="postPoster__textArea"
        placeholder='Your news...'
      />
      <div className={s.postPoster__buttonArea}>
        <button onClick={onClick} className={s.postPoster__button}>Send</button>
      </div>
    </div>
  );
}

export default PostPoster;