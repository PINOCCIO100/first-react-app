import TextInput from '../../../_sharedComponents/TextInput/TextInput';
import { setPostPosterTextActionCreator, addPostActionCreator } from '../../../../dataBase/reducers/usersPostsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const currentUserID = state.ProfileState.currentUserID;
  return {
    currentUserID,
    curUserPostPosterText: state.PostsState.usersPostPosterText[currentUserID],
  }
}
const mapDispatchToProps = {
  setPostPosterTextActionCreator,
  addPostActionCreator,
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
      mapDispatchToProps.setPostPosterTextActionCreator(currentUserID, currentTextUI);
    },
    sendText() {
      mapDispatchToProps.addPostActionCreator(currentUserID);
    },
    labels: {
      placeholder: 'Your news...',
      button: 'Send',
    },
  }
}

export const TextInputPostBlockContainer = connect(mapStateToProps, mapDispatchToProps, mergeToProps)(TextInput)
