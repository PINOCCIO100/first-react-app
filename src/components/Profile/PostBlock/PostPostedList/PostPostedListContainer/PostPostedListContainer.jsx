import { connect } from "react-redux";
import PostPostedList from "../PostPostedList";

let mapStateToProps = (state) => {
  const currentUserID = state.ProfileState.currentUserID;
  return {
    currentUserID,
    usersProfileInfo: state.ProfileState.usersProfileInfo,
    curUserPosts: state.PostsState.usersPosts[currentUserID],
  }
}

export const PostPostedListContainer = connect(mapStateToProps)(PostPostedList)
