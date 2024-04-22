import React from "react";
import style from "./UpdateWatchUserAudioTour.module.css";
import Cancel from "../../asserts/images/cancel.svg";

const UpdateWatchUserAudioTourView = ({
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
}) => {
  if (userAudioTourQuery.isLoading || userAudioTourQuery.isRefetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
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
          <div className={style.category}>
            Category: {category.name}
            <button onClick={onRemoveCategory} className={style.deleteButton}>
              <img src={Cancel} alt="cancel" />
            </button>
          </div>
        )}
      </div>
      <div className={style.tags}>
        <h3>Tags:</h3>
        {tags.map((tag) => (
          <span key={tag.id} className={style.tagItem}>
            {tag.name}
            <button
              onClick={() => onRemoveTag(tag.id)}
              className={style.deleteButton}
            >
              <img src={Cancel} alt="cancel" />
            </button>
          </span>
        ))}
      </div>
      <form onSubmit={onAddTag}>
        <div className={style.tagInputContainer}>
          <input
            className={style.tagInput}
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            placeholder="Enter tag"
          />
          <button className={style.addButton} type="submit">
            Add Tag
          </button>
        </div>
      </form>

      <form onSubmit={onSetCategory}>
        <div className={style.categoryInputContainer}>
          <input
            className={style.categoryInput}
            type="text"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
            placeholder="Enter category"
          />
          <button className={style.addButton} type="submit">
            {!category ? (
              <span>Add category</span>
            ) : (
              <span>Change category</span>
            )}
          </button>
        </div>
      </form>

      <button
        className={style.setComments}
        onClick={(e) => setShowComments(!showComments)}
      >
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {/* Если комментарии отображены, показываем их */}
      {showComments && (
        <div className={style.comments}>
          <h3 className={style.commentsTitle}>Comments:</h3>
          {comments.map((comment) => (
            <div key={comment.id} className={style.comment}>
              <p className={style.commentText}>{comment.text}</p>
              {/* Дополнительные детали комментария, если нужно */}
            </div>
          ))}
          {/* Форма для добавления нового комментария */}
          <form
            className={style.commentForm}
            onSubmit={(e) => {
              e.preventDefault();
              onAddComment(e.target.comment.value);
            }}
          >
            <input className={style.commentInput} type="text" name="comment" />
            <button className={style.commentButton} type="submit">
              Add Comment
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default UpdateWatchUserAudioTourView;
