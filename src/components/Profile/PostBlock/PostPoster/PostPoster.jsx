import { React, createRef, useState } from 'react';
import s from './PostPoster.module.css';

const textArea = createRef();

function PostPoster({ addPost, state }) {
  const { usersPostPosterText, currentUserID } = state;
  const [currentText, setCurrentText] = useState('');

  const onInput = (e) => {
    // функция отрабатывает при вводе в textarea
    // сначала передаем содержимое textarea  в usersPostPosterText (BLL) c возмжностью использовать пред. значение prevValue
    usersPostPosterText.edit(currentUserID.id, (prevVal) => e.target.value);
    // usersPostPosterText.list[id] = e.tarsержимое передаем обратно в textarea (UI), имеея возможность обработать его в BLL (FLUX)   
    setCurrentText(usersPostPosterText.take(currentUserID.id));
  }
  const onClick = () => {
    if (textArea.current.value === '') return;
    addPost(textArea.current.value);
    textArea.current.value = '';
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