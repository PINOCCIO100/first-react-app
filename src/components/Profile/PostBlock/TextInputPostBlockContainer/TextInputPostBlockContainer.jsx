import TextInput from '../../../_sharedComponents/TextInput/TextInput';
import { setPostPosterTextActionCreator, addPostActionCreator } from '../../../../dataBase/reducers/usersPostsReducer';
import { StoreContext } from '../../../_contexts/StoreContext';

function TextInputPostBlockContainer({ setPostedPosts, ...props }) {
  return (
    <StoreContext.Consumer>
      {
        store => {
          const currentUserID = store.getState().ProfileState.currentUserID;

          const getTextFromBLL = () => {
            return store.getState().PostsState.usersPostPosterText[currentUserID];
          }
          const setTextToBLL = (currentTextUI) => {
            store.dispatch(setPostPosterTextActionCreator(currentUserID, currentTextUI));
          }
          const addPost = () => {
            store.dispatch(addPostActionCreator(currentUserID));
            setPostedPosts([...store.getState().PostsState.usersPosts[currentUserID]]);
          };
          return (
            <>
              <TextInput
                getTextFromBLL={getTextFromBLL}
                setTextToBLL={setTextToBLL}
                sendText={addPost}
                labels={{
                  placeholder: 'Your news...',
                  button: 'Send',
                }}
                {...props}
              />
            </>
          )
        }
      }
    </StoreContext.Consumer>
  );
}

export default TextInputPostBlockContainer;