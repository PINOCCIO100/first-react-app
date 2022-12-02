import { createRef, React, useEffect, useState } from 'react';
import s from './DialogsMessageSender.module.css';

const autoresize = (txtaElem) => {
  txtaElem.current.style.height = `auto`;
  txtaElem.current.style.height = `${txtaElem.current.scrollHeight}px`;
}

function DialogsMessageSender(props) {
  const txtaElem = createRef();
  const [trigger, setTrigger] = useState(false);
  useEffect(() => autoresize(txtaElem));
  const onChange = () => setTrigger((prev) => !prev);
  return (
    <div className={s.DialogsMessageSender}>
      <textarea
        ref={txtaElem}
        onInput={onChange}
        name="DialogsMessageSender"
        className='scrollBar'
        placeholder='Text your message..'
        trigger={+trigger} //Триггер для рендера компнента при inpute
      ></textarea>
    </div>
  );
}

export default DialogsMessageSender