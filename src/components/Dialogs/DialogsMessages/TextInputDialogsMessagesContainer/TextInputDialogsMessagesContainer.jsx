import { useParams } from "react-router-dom";
import { sendMessageSenderTextActionCreator, setMessageSenderTextActionCreator } from "../../../../dataBase/reducers/usersMessagesReducer";
import { StoreContext } from "../../../Profile/_contexts/StoreContext";
import TextInput from "../../../_sharedComponents/TextInput/TextInput";

function TextInputDialogsMessagesContainer({ setArrayOfDialogText, ...props }) {
  const { userID } = useParams();
  return (
    <StoreContext.Consumer>
      {
        store => {

          const currentUserID = store.getState().ProfileState.currentUserID;

          const setTextToBLL = (currentTextUI) => {

            store.dispatch(setMessageSenderTextActionCreator(currentUserID, userID, currentTextUI));
          }
          const getTextFromBLL = () => {
            return store.getState().DialogsState.usersMessageSenderText[currentUserID][userID];
          }
          const sendText = () => {
            store.dispatch(sendMessageSenderTextActionCreator(currentUserID, userID));
            const stateOfDialogsMessages = [...store.getState().DialogsState.usersMessages[currentUserID][userID]]
            setArrayOfDialogText(stateOfDialogsMessages);
          };
          return (
            <TextInput
              getTextFromBLL={getTextFromBLL}
              setTextToBLL={setTextToBLL}
              sendText={sendText}
              labels={{
                placeholder: 'Text your message...',
                button: 'Send',
              }}
              {...props}
            />
          )
        }
      }
    </StoreContext.Consumer>
  );
}

export default TextInputDialogsMessagesContainer;