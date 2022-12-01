import { createRef, React, useEffect, useState } from 'react';
import s from './DialogsMessageSender.module.css';

const autoresize = (txtaElem) => {
  txtaElem.current.style.height = `auto`;
  txtaElem.current.style.height = `${txtaElem.current.scrollHeight}px`;
}

function DialogsMessageSender(props) {
  const txtaElem = createRef();
  const [val, setVal] = useState(false);
  useEffect(() => autoresize(txtaElem));
  const onChange = () => setVal((prev) => !prev);
  return (
    <div className={s.DialogsMessageSender}>
      <textarea
        ref={txtaElem}
        onInput={onChange}
        name="DialogsMessageSender"
        className='scrollBar'
        placeholder='Text your message..'
        trigger={val} //Триггер для рендера компнента при inpute
      ></textarea>
    </div>
  );
}

export default DialogsMessageSender