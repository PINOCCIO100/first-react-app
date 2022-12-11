import { createRef, React, useEffect, useState } from 'react';
import s from './TextInput.module.css';

const autoResize = (txtaElem) => {
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

  const txtaElem = createRef();
  useEffect(() => {
    // создаем ref на textarea и при рендере компонента и применяем к нему autoResize в useEffect   
    autoResize(txtaElem.current);
    // вставляем в textarea не отправленный текст из BLL
    setCurrentTextUI(getTextFromBLL());
  }, [txtaElem]);

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
    autoResize(e.target);
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