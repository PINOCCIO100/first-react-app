import { useParams } from "react-router-dom";
import { StoreContext } from "../../../Profile/_contexts/StoreContext";
import DialogsMessagesList from "../DialogsMessagesList/DialogsMessagesList";
import DialogsText from "../DialogsText/DialogsText";

function DialogsMessagesListContainer({ setArrayOfDialogText, children }) {
  const userID = useParams().userID;
  return (
    <StoreContext.Consumer>
      {
        store => {
          let key = Date.now();
          const usersProfileInfo = store.getState().ProfileState.usersProfileInfo;
          const currentUserID = store.getState().ProfileState.currentUserID;
          const initializeMessages = () => {
            setArrayOfDialogText([...store.getState().DialogsState.usersMessages[currentUserID][userID]]);
          }
          return (
            <>
              <DialogsMessagesList initializeMessages={initializeMessages}>
                {
                  children.map(({ me, message }) => {
                    const messageAttributes = {
                      my: me,
                      message: message,
                      userProfileInfo: usersProfileInfo[me ? currentUserID : userID],
                    };
                    return <DialogsText key={key++} messageAttributes={messageAttributes} />
                  })
                }
              </DialogsMessagesList>
            </>
          )
        }
      }
    </StoreContext.Consumer>
  );
}

export default DialogsMessagesListContainer;