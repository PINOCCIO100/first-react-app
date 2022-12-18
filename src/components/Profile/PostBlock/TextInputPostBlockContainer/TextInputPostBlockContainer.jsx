import TextInput from '../../../_sharedComponents/TextInput/TextInput';
import { setPostPosterText, addPost } from '../../../../dataBase/reducers/usersPostsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const currentUserID = state.ProfileState.currentUserID;
  return {
    currentUserID,
    curUserPostPosterText: state.PostsState.usersPostPosterText[currentUserID],
  }
}
const mapDispatchToProps = {
  setPostPosterText,
  addPost,
}

const mergeToProps = (mapStateToProps, mapDispatchToProps, ownProps) => {
  const currentUserID = mapStateToProps.currentUserID;
  return {
    ...mapStateToProps,
    ...mapDispatchToProps,
    ...ownProps,
    getTextFromBLL() {
      return mapStateToProps.curUserPostPosterText;
    },
    setTextToBLL(currentTextUI) {
      mapDispatchToProps.setPostPosterText(currentUserID, currentTextUI);
    },
    sendText() {
      mapDispatchToProps.addPost(currentUserID);
    },
    labels: {
      placeholder: 'Your news...',
      button: 'Send',
    },
  }
}

export const TextInputPostBlockContainer = connect(mapStateToProps, mapDispatchToProps, mergeToProps)(TextInput)
