import { Link } from "react-router-dom";
import style from "./AllCourses.module.css";
import BookMark from "../../asserts/images/bookmarl.svg";
import AddedBookMark from "../../asserts/images/added_bookmark.svg";
import "../../asserts/styles/search.css";

const AllCoursesView = ({
  AllCoursesQuery,
  courses,
  makeBookmark,
  bookmarks,
  setSearchQuery,
  searchQuery,
  handleSearch,
}) => {
  if (AllCoursesQuery.isLoading || AllCoursesQuery.isRefetching) {
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
        {courses &&
          courses.map((course, index) => (
            <div className={style.card}>
              <div className={style.cardImageContainer}>
                {course.pathPicture ? (
                  <img
                    src={course.pathPicture}
                    alt={course.title}
                    className={style.cardImage}
                  />
                ) : (
                  <div className={style.placeholderImage}>
                    <span className={style.placeholderText}>No Image</span>
                  </div>
                )}
                <button
                  className={`${style.bookmark_btn} ${
                    bookmarks[course.courseId] ? style.bookmarked : ""
                  }`}
                  onClick={() => makeBookmark(course.courseId)}
                >
                  {bookmarks[course.courseId] ? (
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
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                  <p>
                    <strong>Place:</strong> {course.place}
                  </p>
                  <p>
                    <strong>Address:</strong> {course.address}
                  </p>
                </div>
                <div className={style.cardContentLink}>
                  <Link
                    to={`/watch_course/${course.courseId}`}
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

export default AllCoursesView;
