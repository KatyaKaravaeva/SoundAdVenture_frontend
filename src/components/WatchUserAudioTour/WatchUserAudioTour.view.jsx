import React from "react";
import style from "./WatchUserAudioTour.module.css";
import Cancel from "../../asserts/images/cancel.svg";
import WatchStepAudioTour from "../WatchStepAudioTour";

const WatchUserAudioTourView = ({
  userAudioTourQuery,
  audioTour,
  tags,
  category,
  comments,
  onAddTag,
  onRemoveTag,
  onSetCategory,
  onRemoveCategory,
  setCategoryInput,
  categoryInput,
  tagInput,
  setTagInput,
  onAddComment,
  showComments,
  setShowComments,
  newCommentText,
  setNewCommentText,
  handleAddComment,
}) => {
  if (userAudioTourQuery.isLoading || userAudioTourQuery.isRefetching) {
    return <div>Loading...</div>;
  }
  return (
    <div className={style.container}>
      <div className={style.container_right}>
        <WatchStepAudioTour />
      </div>
      <div className={style.container_left}>
        <img
          src={audioTour.pathPicture}
          alt={audioTour.pathPicture}
          className={style.cardImage}
        />
        <div className={style.cardTitle}>
          <h2 className={style.title}>{audioTour.title}</h2>
          <p className={style.description}>
            Description: {audioTour.description}
          </p>
          <p className={style.place}>Place: {audioTour.place}</p>
          <p className={style.address}>Address: {audioTour.address}</p>
          {category && (
            <div className={style.category}>Category: {category.name}</div>
          )}
        </div>
        <div className={style.tags}>
          <div className={style.tags_container}>
            {tags.map((tag) => (
              <div key={tag.id} className={style.tagItem}>
                <span>{tag.name}</span>
              </div>
            ))}
          </div>
        </div>
        <button
          className={style.setComments}
          onClick={(e) => setShowComments(!showComments)}
        >
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>

        {showComments && (
          <div className={style.comments}>
            <h3 className={style.commentsTitle}>Comments:</h3>
            {console.log(comments)}
            {comments.map((comment) => (
              <div key={comment.id} className={style.comment}>
                <p className={style.commentUser}>{`${
                  comment.user.name ?? " "
                } ${comment.user.lastname ?? " "}`}</p>
                <p className={style.commentText}>{comment.text}</p>
              </div>
            ))}
            <form
              className={style.commentForm}
              onSubmit={(e) => {
                e.preventDefault();
                handleAddComment(newCommentText);
              }}
            >
              <input
                className={style.commentInput}
                type="text"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Enter your comment"
              />
              <button className={style.commentButton} type="submit">
                Add Comment
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default WatchUserAudioTourView;
