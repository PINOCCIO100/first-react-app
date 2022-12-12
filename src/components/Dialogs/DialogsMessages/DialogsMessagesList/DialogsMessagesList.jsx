import { useParams } from 'react-router-dom';
import DialogsText from '../DialogsText/DialogsText';
import s from './DialogsMessagesList.module.css';

function DialogsMessagesList({ usersProfileInfo, currentUserID, curUserMessages }) {
  const { userID } = useParams();

  let key = Date.now();
  return (
    <div className={s.DialogsMessagesList}>
      {
        curUserMessages[userID].map(({ me, message }) => {
          const messageAttributes = {
            my: me,
            message: message,
            userProfileInfo: usersProfileInfo[me ? currentUserID : userID],
          };
          return <DialogsText key={key++} messageAttributes={messageAttributes} />
        })
      }
    </div>
  );
}

export default DialogsMessagesList;