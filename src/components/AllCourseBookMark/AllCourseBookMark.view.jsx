import { Link } from "react-router-dom";
import style from "./AllCourseBookMark.module.css";
import BookMark from "../../asserts/images/bookmarl.svg";
import AddedBookMark from "../../asserts/images/added_bookmark.svg";
import { All_COURSES } from "../../navigation/routes";

const AllCourseBookMarkView = ({
  AllCourseBookMarkQuery,
  audioTours,
  makeBookmark,
  bookmarks,
}) => {
  if (
    AllCourseBookMarkQuery.isLoading ||
    AllCourseBookMarkQuery.isRefetching
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
          <Link to={All_COURSES} class="alert-link">
            Посмотреть все образовательные курсы
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
                bookmarks[tour.courseId] ? style.bookmarked : ""
              }`}
              onClick={() => makeBookmark(tour.courseId)}
            >
              {bookmarks[tour.courseId] ? (
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
                <strong>Place:</strong> {tour.place}
              </p>
              <p>
                <strong>Address:</strong> {tour.address}
              </p>
            </div>
            <div className={style.cardContentLink}>
              <Link
                to={`/course_watch/${tour.courseId}`}
                className={style.button}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCourseBookMarkView;
