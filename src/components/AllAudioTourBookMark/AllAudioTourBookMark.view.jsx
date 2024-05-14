import { Link } from "react-router-dom";
import style from "./AllAudioTourBookMark.module.css";
import BookMark from "../../asserts/images/bookmarl.svg";
import AddedBookMark from "../../asserts/images/added_bookmark.svg";
import { All_AUDIO_TOUR } from "../../navigation/routes";

const AllAudioTourBookMarkView = ({
  AllAudioTourBookMarkQuery,
  audioTours,
  makeBookmark,
  bookmarks,
}) => {
  if (
    AllAudioTourBookMarkQuery.isLoading ||
    AllAudioTourBookMarkQuery.isRefetching
  ) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  if (audioTours.length === 0) {
    return (
      <div>
        <div class="alert alert-dark" role="alert">
          <span>Здесь пусто. </span>
          <Link to={All_AUDIO_TOUR} class="alert-link">
            Посмотреть все аудиоэкскурсии
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={style.container}>
      {audioTours.map((tour, index) => (
        <div className={style.card}>
          <div className={style.cardImageContainer}>
            {tour.pathPicture ? (
              <img
                src={tour.pathPicture}
                alt={tour.title}
                className={style.cardImage}
              />
            ) : (
              <div className={style.placeholderImage}>
                <span className={style.placeholderText}>No Image</span>
              </div>
            )}
            <button
              className={`${style.bookmark_btn} ${
                bookmarks[tour.audioTourId] ? style.bookmarked : ""
              }`}
              onClick={() => makeBookmark(tour.audioTourId)}
            >
              {bookmarks[tour.audioTourId] ? (
                <img src={AddedBookMark} className={style.addedBookmarkIcon} />
              ) : (
                <img src={BookMark} className={style.bookmarkIcon} />
              )}
            </button>
          </div>
          <div className={style.cardContent}>
            <div className={style.cardContentData}>
              <h2>{tour.title}</h2>
              <p>{tour.description}</p>
              <p>
                <strong>Место:</strong> {tour.place}
              </p>
              <p>
                <strong>Адрес:</strong> {tour.address}
              </p>
            </div>
            <div className={style.cardContentLink}>
              <Link
                to={`/audio_tour_watch/${tour.audioTourId}`}
                className={style.button}
              >
                Подробнее
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAudioTourBookMarkView;
