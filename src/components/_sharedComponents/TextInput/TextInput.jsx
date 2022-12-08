import { createRef, React, useEffect, useState } from 'react';
import s from './TextInput.module.css';

const autoresize = (txtaElem) => {
  const txtaElemStyle = window.getComputedStyle(txtaElem);
  const height = Number.parseInt(txtaElemStyle.height);
  const maxHeight = Number.parseInt(txtaElemStyle.maxHeight);

  txtaElem.style.height = `auto`;
  txtaElem.style.height = `${txtaElem.scrollHeight}px`;

  if (!isNaN(maxHeight)) {
    txtaElem.style.overflowY = height >= maxHeight ? 'auto' : 'hidden';
  }
}

function TextInput({ className, getTextFromBLL, setTextToBLL, sendText, labels }) {

  // создаем ref на textarea и при рендере компонента и применяем к нему autoresize в useEffect   
  const txtaElem = createRef();
  useEffect(() => {
    autoresize(txtaElem.current);
    setCurrentTextUI(getTextFromBLL());
  }, [txtaElem, getTextFromBLL]);

  // const [focused, setFocused] = useState(false)
  // const onFocus = () => setFocused(true);
  // const onBlur = () => setFocused(false);

  const keyDownFunc = (e) => {
    if (e.code === 'Enter' && e.ctrlKey) {
      sendText();
      setCurrentTextUI(getTextFromBLL());
    };
  }
  useEffect(() => {
    document.addEventListener('keydown', keyDownFunc);
    return () => document.removeEventListener('keydown', keyDownFunc);
  });


  const [currentTextUI, setCurrentTextUI] = useState(getTextFromBLL());
  const onInput = (e) => {
    setTextToBLL(e.target.value);
    setCurrentTextUI(getTextFromBLL());
    autoresize(e.target);
  }
  const onClick = () => {
    sendText();
    setCurrentTextUI(getTextFromBLL());
  }
  return (
    <div className={[s.TextInput, className].join(' ')}>
      <textarea
        ref={txtaElem}
        value={currentTextUI}
        // onFocus={onFocus}
        // onBlur={onBlur}
        onInput={onInput}
        className='scrollBar'
        name="TextInput"
        placeholder={labels.placeholder}
      ></textarea>
      <div className={s.TextInput__buttonArea}>
        <button onClick={onClick} className={s.TextInput__button}>{labels.button}</button>
      </div>
    </div >
  );
}

export default TextInput