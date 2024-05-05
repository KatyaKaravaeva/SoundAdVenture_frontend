import React from "react";
import style from "./UpdateWatchUserAudioTour.module.css";
import Cancel from "../../asserts/images/cancel.svg";
import CreateArticle from "../CreateArticle";

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
  newCommentText,
  setNewCommentText,
  handleAddComment,
  setAddArticle,
  addArticle,
  setAddAudio,
  addAudio,
  uploadAudioFile,
  addPicture,
  setAddPicture,
  fileInputRef,
  uploadPictureFile,
  userAudioTourStepsQuery,
  id,
}) => {
  if (
    userAudioTourQuery.isLoading ||
    userAudioTourQuery.isRefetching ||
    userAudioTourStepsQuery.isLoading ||
    userAudioTourStepsQuery.isRefetching
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
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
            <div className={style.category}>
              Category: {category.name}
              <button onClick={onRemoveCategory} className={style.deleteButton}>
                <img src={Cancel} alt="cancel" />
              </button>
            </div>
          )}
        </div>
        <div className={style.tags}>
          <div className={style.tags_container}>
            {tags.map((tag) => (
              <div key={tag.id} className={style.tagItem}>
                <span>{tag.name}</span>
                <button
                  onClick={() => onRemoveTag(tag.id)}
                  className={style.deleteButton}
                >
                  <img src={Cancel} alt="cancel" />
                </button>
              </div>
            ))}
          </div>
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
      <div className={style.container_right}>
        <div className={style.steps}>
          {userAudioTourStepsQuery.data.map((step, index) => (
            <div
              key={step.id}
              className={style.stepItem}
              //onClick={() => handleStepClick(step)}
            >
              <div className={style.stepNumber}>{index + 1}</div>
            </div>
          ))}
        </div>
        <div className={style.step_container}>
          <div className={style.step_title}>
            <p>Добавить шаг</p>
          </div>
          <div className={style.button_container}>
            <button
              className={style.button_step}
              onClick={() => {
                setAddAudio((prev) => !prev);
                setAddArticle(false);
                setAddPicture(false);
              }}
            >
              Аудио
            </button>
            <button
              className={style.button_step}
              onClick={() => {
                setAddArticle((prev) => !prev);
                setAddAudio(false);
                setAddPicture(false);
              }}
            >
              Текст
            </button>
            <button
              className={style.button_step}
              onClick={() => {
                setAddPicture((prev) => !prev);
                setAddArticle(false);
                setAddAudio(false);
              }}
            >
              Картинка
            </button>
          </div>
        </div>
        {addAudio && (
          <div className={style.audio}>
            <input
              type="file"
              accept="audio/mpeg"
              className={style.audio_input}
            />
            <button className={style.button_add} onClick={uploadAudioFile}>
              Добавить
            </button>
          </div>
        )}
        {addArticle && <CreateArticle audioTourId={id} userAudioTourStepsQuery={userAudioTourStepsQuery} />}
        {addPicture && (
          <div className={style.audio}>
            <input
              type="file"
              accept="image/jpeg, image/png"
              ref={fileInputRef}
              className={style.picture_input}
            />
            <button className={style.button_add} onClick={uploadPictureFile}>
              Добавить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default UpdateWatchUserAudioTourView;
