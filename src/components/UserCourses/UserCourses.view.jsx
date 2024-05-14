import { Link } from "react-router-dom";
import style from "./UserCourses.module.css";
import Cancel from "../../asserts/images/cancel.svg";
import { COURSE } from "../../navigation/routes";

const UserCoursesView = ({
  userAudioTourQuery,
  courses,
  onDeleteTour,
}) => {
  if (
    !userAudioTourQuery ||
    userAudioTourQuery.isLoading ||
    userAudioTourQuery.isRefetching
  ) {
    return (
      <div className="center">
        <div className="spinner-border spinner-border-lg" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div>
        <div class="alert alert-dark" role="alert">
          <span>Здесь пусто. </span>
          <Link to="/create_course" class="alert-link">
            Cоздать образовательный курс
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      {courses.map((tour, index) => (
        <div key={index} className={style.card}>
          <img
            src={tour.pathPicture}
            alt={tour.title}
            className={style.cardImage}
          />
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
            <div className={style.buttonsContainer}>
              <div className={style.cardContentLink}>
                <Link
                  to={`${COURSE}/${tour.courseId}`}
                  className={style.button}
                >
                  Подробнее
                </Link>
              </div>
              <button
                onClick={() => onDeleteTour(tour.courseId)}
                className={style.deleteButton}
              >
                <img src={Cancel} alt="cancel" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCoursesView;
