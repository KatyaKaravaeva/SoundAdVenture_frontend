import React, { useState } from "react";
import style from "./WatchUserAudioTour.module.css";
import Return from "../../asserts/images/return.svg";
import WatchStepAudioTour from "../WatchStepAudioTour";
import "./style.scss";
import Stars from "../Stars/Stars";
import "../../asserts/styles/rating.css";

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
  userAudioTourMarkQuery,
  avMark,
  setNewCosetAvMark,
  setAmountMarked,
  amountMarked,
  markCounts,
  setMarkCounts,
}) => {
  const [showAudioTour, setShowAudioTour] = useState(false);

  if (
    userAudioTourQuery.isLoading ||
    userAudioTourQuery.isRefetching ||
    userAudioTourMarkQuery.isLoading ||
    userAudioTourMarkQuery.isRefetching
  ) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`fa fa-star${i <= roundedRating ? " checked" : ""}`}
        ></span>
      );
    }
    return stars;
  };

  const renderRatingBars = () => {
    const totalRatings = Object.values(markCounts).reduce((a, b) => a + b, 0);

    return [5, 4, 3, 2, 1].map((star) => {
      const count = markCounts[star] || 0;
      const width = totalRatings ? `${(count / totalRatings) * 100}%` : "0%";

      return (
        <div key={star} className="row">
          <div className="side">
            <div>
              <span className="ddd">
                <b>{star}</b>
              </span>{" "}
              <span className={`fa fa-star`}></span>
            </div>
          </div>
          <div className="middle">
            <div className="bar_container">
              <div
                className={`bar bar-${star}`}
                style={{ "--width": width }}
              ></div>
            </div>
          </div>
          <div className="side right">
            <div className="sss">
              <b>{count}</b>
            </div>
          </div>
        </div>
      );
    });
  };

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
              className="learn-more button"
              onClick={() => setShowAudioTour(true)}
            >
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Перейти к аудиогиду</span>
            </button>
            <p className={style.description}>
              Описание: {audioTour.description}
            </p>
            <p className={style.place}>Место: {audioTour.place}</p>
            <p className={style.address}>Адрес: {audioTour.address}</p>
            {category && (
              <div className={style.category}>Категория: {category.name}</div>
            )}
            <div className={style.rating}>
              <span className="heading">Пользовательский рейтинг</span>
              {renderStars(avMark)}
              <p>
                {avMark} в среднем по {amountMarked} голосам.
              </p>
              <hr className="hr_user__rating" />
              {renderRatingBars()}
            </div>
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
          <div className={style.rating_container__div}>
            <span className={style.rating_userStars__p}>Оценить: </span>
            <Stars
              type={"audioGuide"}
              idItem={audioTour.audioTourId}
              iconSize={27}
              defaultRating={userAudioTourMarkQuery.data.mark}
              setNewCosetAvMark={setNewCosetAvMark}
              setAmountMarked={setAmountMarked}
              setMarkCounts={setMarkCounts}
            />
          </div>
          <button
            className={style.setComments}
            onClick={(e) => setShowComments(!showComments)}
          >
            {showComments ? "Скрыть комментарии" : "Показать комментарии"}
          </button>

          {showComments && (
            <div className={style.comments}>
              <h3 className={style.commentsTitle}>Комментарии:</h3>
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
                  placeholder="Введите комментарий..."
                />
                <button className={style.commentButton} type="submit">
                  Добавить комментарий
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
