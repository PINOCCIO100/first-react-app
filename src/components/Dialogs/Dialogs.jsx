import React from 'react';
import s from './Dialogs.module.css';

function Dialogs(props) {
  return ( 
    <div className={s["dialogs"]}>
      Dialogs
      {props.content}
    </div>
   );
}

export default Dialogs;