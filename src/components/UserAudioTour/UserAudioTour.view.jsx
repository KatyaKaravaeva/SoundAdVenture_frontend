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
      <div>
        <h1>loading...</h1>
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
            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <p>
              <strong>Place:</strong> {tour.place}
            </p>
            <p>
              <strong>Address:</strong> {tour.address}
            </p>
            <div className={style.buttonsContainer}>
              <Link
                to={`${AUDIO_TOUR}/${tour.audioTourId}`}
                className={style.button}
              >
                View Details
              </Link>
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
