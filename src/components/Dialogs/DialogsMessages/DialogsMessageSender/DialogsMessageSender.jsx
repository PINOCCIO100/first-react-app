import { createRef, React, useEffect, useState } from 'react';
import s from './DialogsMessageSender.module.css';

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

function DialogsMessageSender({ getTextFromBLL, setTextToBLL, sendText }) {

  // создаем ref на textarea и при рендере компонента и применяем к нему autoresize в useEffect   
  const txtaElem = createRef();
  useEffect(() => autoresize(txtaElem.current));

  const [currentTextUI, setCurrentTextUI] = useState(getTextFromBLL());
  const onInput = (e) => {
    setTextToBLL(e.target.value);
    setCurrentTextUI(getTextFromBLL() + 1);
    autoresize(e.target);
  }
  const onClick = () => {
    sendText();
    setCurrentTextUI(getTextFromBLL());
  }
  return (
    <div className={s.DialogsMessageSender}>
      <textarea
        ref={txtaElem}
        value={currentTextUI}
        onInput={onInput}
        className='scrollBar'
        name="DialogsMessageSender"
        placeholder='Text your message..'
      ></textarea>
      <div className={s.DialogsMessageSender__buttonArea}>
        <button onClick={onClick} className={s.DialogsMessageSender__button}>Send</button>
      </div>
    </div >
  );
}

export default DialogsMessageSender