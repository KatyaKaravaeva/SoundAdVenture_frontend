import { Link } from "react-router-dom";
import style from "./AllAudioTour.module.css";
import BookMark from "../../asserts/images/bookmarl.svg";
import AddedBookMark from "../../asserts/images/added_bookmark.svg";
import "../../asserts/styles/search.css";
const AllAudioTourView = ({
  AllAudioTourQuery,
  audioTours,
  makeBookmark,
  bookmarks,
  setSearchQuery,
  searchQuery,
  handleSearch,
}) => {
  if (AllAudioTourQuery.isLoading || AllAudioTourQuery.isRefetching) {
    return (
      <div className="center">
        <div className="spinner-border spinner-border-lg" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={style.main_container}>
      <div className="wrapper">
        <div className="search-input">
          <a href="" target="_blank" hidden></a>
          <input
            type="text"
            placeholder="Введите текст для поиска.."
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <div className="autocom-box"></div>
          <div className="icon">
            <i className="fas fa-search" onClick={handleSearch}></i>{" "}
          </div>
        </div>
      </div>
      <div className={style.container_watch__cards}>
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
                  <img
                    src={AddedBookMark}
                    className={style.addedBookmarkIcon}
                  />
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
                  <strong>Place:</strong> {tour.place}
                </p>
                <p>
                  <strong>Address:</strong> {tour.address}
                </p>
              </div>
              <div className={style.cardContentLink}>
                <Link
                  to={`/audio_tour_watch/${tour.audioTourId}`}
                  className={style.button}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAudioTourView;
