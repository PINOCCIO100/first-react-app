import { React, createRef } from 'react';
import s from './PostPoster.module.css';

const textArea = createRef();

function PostPoster({ addPost }) {
  const onClick = () => {
    if (textArea.current.value === '') return;
    addPost(textArea.current.value);
    textArea.current.value = '';
  }
  return (
    <div className={s.postPoster} >
      <textarea
        ref={textArea}
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