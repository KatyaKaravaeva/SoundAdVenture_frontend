import { Link } from "react-router-dom";
import style from "./AllAudioTour.module.css";

const AllAudioTourView = ({ allAudioTourQuery, audioTours }) => {
  if (!allAudioTourQuery || allAudioTourQuery.isLoading || allAudioTourQuery.isRefetching) {
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
            <Link
              to={`/audio-tour/${tour.audioTourId}`}
              className={style.button}
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAudioTourView;
