import { useState } from 'react';
import styles from './Auth.module.css';

//TODO: Посмотреть, нужно ли полноценно реализовывать flux при вводе почты/пароля (двустороннее связывание при каждом нажатии клавиш)

function Auth({ submitUserData, curUsID }) {

  const onClick = (e) => {
    e.preventDefault();
    submitUserData({ email, password });
    setEmail(''); setPassword('');
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.Auth}>
      <div className={styles.Auth__form}>
        <p className={styles.Auth__label}>Email</p>
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className={styles.Auth__email} />
        <p className={styles.Auth__label}>Password</p>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className={styles.Auth__password} />
        <button onClick={onClick} className={styles.Auth__button}>Submit</button>
      </div>
    </div>
  );
}

export default Auth;