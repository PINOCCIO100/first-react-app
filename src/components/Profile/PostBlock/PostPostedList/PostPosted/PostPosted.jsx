import ButtonRating from './ButtonRating/ButtonRating';
import s from './PostPosted.module.css';

function PostPosted({ post, photo }) {
  const {message, rating } = post;
  return (
    <div className={s.postPosted}>
      <div className={s.postPosted__userProfilePhoto}>
        <img src={photo} alt="postPosted__userProfilePhoto" />
      </div>
      <div className={s.postPosted__msgAndBtnsCont}>
        <div className={s.postPosted__message}>
          <p>
            {message}
          </p>
        </div>
        <div className={s.postPosted__ratingButtons}>
          <ButtonRating like={rating.likes} />
          <ButtonRating dislike={rating.dislikes} />
        </div>
      </div>
    </div>
  );
}

export default PostPosted;