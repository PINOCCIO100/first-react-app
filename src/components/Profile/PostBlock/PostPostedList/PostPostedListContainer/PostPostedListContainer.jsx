import { connect } from "react-redux";
import PostPostedList from "../PostPostedList";


let mapStateToProps = (state) => {
  const currentUserID = state.ProfileState.currentUserID;
  const usersProfileInfo = { ...state.ProfileState.usersProfileInfo };
  const curUserPosts = [...state.PostsState.usersPosts[currentUserID]];
  return {
    usersProfileInfo,
    curUserPosts,
    }
}

let mergeToProps = (mapStateToProps, mapDispatchToProps, ownProps) => {
  return {
    ...mapStateToProps,
    ...mapDispatchToProps,
    ...ownProps,
    initializePosts: () => {
      ownProps.setPostedPosts(mapStateToProps.curUserPosts);
    }
  }
}

export const PostPostedListContainer = connect(mapStateToProps, null, mergeToProps)(PostPostedList)
