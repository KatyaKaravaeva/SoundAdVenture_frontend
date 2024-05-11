import React, { useState } from "react";
import style from "./WatchUserAudioTour.module.css";
import Return from "../../asserts/images/return.svg";
import WatchStepAudioTour from "../WatchStepAudioTour";
import "./style.scss";
import Stars from "../Stars/Stars";

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
  const [showAudioTour, setShowAudioTour] = useState(false);
  const defaultRating = localStorage.getItem("starRating");
  if (userAudioTourQuery.isLoading || userAudioTourQuery.isRefetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      {!showAudioTour && (
        <div className={style.container_left}>
          <img
            src={audioTour.pathPicture}
            alt={audioTour.pathPicture}
            className={style.cardImage}
          />
          <div className={style.cardTitle}>
            <h2 className={style.title}>{audioTour.title}</h2>
            <button
              class="learn-more button"
              onClick={() => setShowAudioTour(true)}
            >
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Перейти к аудиогиду</span>
            </button>
            <p className={style.description}>
              Description: {audioTour.description}
            </p>
            <p className={style.place}>Place: {audioTour.place}</p>
            <p className={style.address}>Address: {audioTour.address}</p>
            {category && (
              <div className={style.category}>Category: {category.name}</div>
            )}
          </div>
          <Stars iconSize={27} defaultRating={defaultRating} />
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
      )}
      {showAudioTour && (
        <div className={style.container_right}>
          <button
            className={style.toggleButton_return}
            onClick={() => setShowAudioTour(false)}
          >
            <img src={Return} alt="return" />
          </button>
          <WatchStepAudioTour />
        </div>
      )}
    </div>
  );
};

export default WatchUserAudioTourView;
