import { Link } from "react-router-dom";
import style from "./ChooseCategoryAudioTours.module.css";

const ChooseCategoryAudioToursView = ({
  chooseCategoryAudioToursQuery,
  audioTours,
}) => {
  if (
    chooseCategoryAudioToursQuery.isLoading ||
    chooseCategoryAudioToursQuery.isRefetching
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
  );
};

export default ChooseCategoryAudioToursView;
