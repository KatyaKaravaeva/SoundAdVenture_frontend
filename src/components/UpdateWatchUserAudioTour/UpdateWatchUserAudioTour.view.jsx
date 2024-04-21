import React from "react";
import style from "./UpdateWatchUserAudioTour.module.css";
import Cancel from "../../asserts/images/cancel.svg";

const UpdateWatchUserAudioTourView = ({
  userAudioTourQuery,
  audioTour,
  tags,
  category,
  onAddTag,
  onRemoveTag,
  onSetCategory,
  setCategoryInput,
  tagInput,
  setTagInput,
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
      <h2 className={style.title}>{audioTour.title}</h2>
      <p className={style.description}>Description: {audioTour.description}</p>
      <p className={style.place}>Place: {audioTour.place}</p>
      <p className={style.address}>Address: {audioTour.address}</p>
      {category && <p className={style.category}>Category: {category}</p>}
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
    </div>
  );
};

export default UpdateWatchUserAudioTourView;
