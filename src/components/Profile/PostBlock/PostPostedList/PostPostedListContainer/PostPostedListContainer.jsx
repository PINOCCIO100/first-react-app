import { useContext } from "react";
import { StoreContext } from "../../../../_contexts/StoreContext";
import PostPosted from "../PostPosted/PostPosted";
import PostPostedList from "../PostPostedList";

function PostPostedListContainer({ children, setPostedPosts, ...props }) {
  const store = useContext(StoreContext);
  const currentUserID = store.getState().ProfileState.currentUserID;
  const usersProfileInfo = store.getState().ProfileState.usersProfileInfo;
  const initializePosts = () => {
    setPostedPosts([...store.getState().PostsState.usersPosts[currentUserID]]);
  }
  return (
    <>
      <PostPostedList {...props} initializePosts={initializePosts} >
        {
          children.map((post) => {
            return (<PostPosted
              key={post.messageID}
              post={post}
              photo={usersProfileInfo[post.userID].photo} />);
          })
        }
      </PostPostedList>
    </>
  )

}

export default PostPostedListContainer;