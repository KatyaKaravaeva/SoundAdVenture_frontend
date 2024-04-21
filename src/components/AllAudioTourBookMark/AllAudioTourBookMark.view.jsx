import { Link } from "react-router-dom";
import style from "./AllAudioTourBookMark.module.css";
import BookMark from "../../asserts/images/bookmarl.svg";
import AddedBookMark from "../../asserts/images/added_bookmark.svg";

const AllAudioTourBookMarkView = ({
  AllAudioTourBookMarkQuery,
  audioTours
}) => {
  if (AllAudioTourBookMarkQuery.isLoading || AllAudioTourBookMarkQuery.isRefetching) {
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

export default AllAudioTourBookMarkView;
