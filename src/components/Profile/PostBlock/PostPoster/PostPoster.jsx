import { React, createRef, useState } from 'react';
import s from './PostPoster.module.css';

const textArea = createRef();

function PostPoster({ addPost, state, actions }) {
  const { usersPostPosterText, currentUserID } = state;
  const [currentText, setCurrentText] = useState(usersPostPosterText.take(currentUserID.id));

  const onInput = (e) => {
    // функция отрабатывает при вводе в textarea
    // сначала передаем содержимое textarea  в usersPostPosterText (BLL) c возмжностью использовать пред. значение prevValue
    usersPostPosterText.edit(currentUserID.id, (prevVal) => e.target.value);
    // usersPostPosterText.list[id] = e.tarsержимое передаем обратно в textarea (UI), имеея возможность обработать его в BLL (FLUX)   
    setCurrentText(usersPostPosterText.take(currentUserID.id));
  }
  const onClick = () => {
    // если пустой пост - не выводим его
    if (textArea.current.value === '') return;
    // добавляем наш пост по кнопке Send
    addPost(usersPostPosterText.take(currentUserID.id));
    // обнуляем поле ввода после добавления нового поста на стороне BLL
    usersPostPosterText.edit(currentUserID.id, () => '');
    // обнуляем поле ввода на стороне UI через стэйт currentText, что заставлет перерендериться весь PostPoster
    setCurrentText(usersPostPosterText.take(currentUserID.id));
  }
  return (
    <div className={s.postPoster} >
      <textarea
        ref={textArea}
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