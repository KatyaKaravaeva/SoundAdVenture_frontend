import { Link } from "react-router-dom";
import style from "./UserAudioTour.module.css";
import Cancel from "../../asserts/images/cancel.svg";
import { AUDIO_TOUR } from "../../navigation/routes";

const UserAudioTourView = ({
  userAudioTourQuery,
  audioTours,
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

  if (audioTours.length === 0) {
    return (
      <div>
        <div class="alert alert-dark" role="alert">
          <span>Здесь пусто. </span>
          <Link to="/create_audio_tour" class="alert-link">
            Cоздать аудиоэкскурсию
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      {audioTours.map((tour, index) => (
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
                  to={`${AUDIO_TOUR}/${tour.audioTourId}`}
                  className={style.button}
                >
                  View Details
                </Link>
              </div>
              <button
                onClick={() => onDeleteTour(tour.audioTourId)}
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

export default UserAudioTourView;
