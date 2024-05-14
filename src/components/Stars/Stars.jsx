import "./Stars.css";
import { $authHost } from "../../services/api.service";
import { useState } from "react";

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = "★";
const DEFAULT_UNSELECTED_COLOR = "grey";
const DEFAULT_COLOR = "yellow";

export default function Stars({
  type,
  idItem,
  count,
  defaultRating,
  icon,
  color,
  iconSize,
  setNewCosetAvMark,
  setAmountMarked,
  setMarkCounts,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  let stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);

  const handleClick = async (rating) => {
    setRating(rating);
    try {
      const starType = type === "course" ? 0 : 1;
  
      await $authHost.post(`/Stars/createStars`, {
        mark: rating,
        unitId: idItem,
        type: starType,
      });
  
      const [
        averageMarkResponse,
        totalMarkCountResponse,
        oneStar,
        twoStars,
        threeStars,
        fourStars,
        fiveStars,
      ] = await Promise.all([
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getAverageMark?unitId=${idItem}&type=${starType}`
        ),
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getTotalMarkCount?unitId=${idItem}&type=${starType}`
        ),
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${idItem}&type=${starType}&mark=1`
        ),
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${idItem}&type=${starType}&mark=2`
        ),
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${idItem}&type=${starType}&mark=3`
        ),
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${idItem}&type=${starType}&mark=4`
        ),
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${idItem}&type=${starType}&mark=5`
        ),
      ]);
  
      const dataAv = averageMarkResponse.data;
      const data2 = totalMarkCountResponse.data;
  
      const oneStarData = oneStar.data;
      const twoStarsData = twoStars.data;
      const threeStarsData = threeStars.data;
      const fourStarsData = fourStars.data;
      const fiveStarsData = fiveStars.data;
  
      setAmountMarked(data2);
      setNewCosetAvMark(dataAv);
      setMarkCounts({
        1: oneStarData,
        2: twoStarsData,
        3: threeStarsData,
        4: fourStarsData,
        5: fiveStarsData,
      });
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="starsContainer">
      {stars.map((item, index) => {
        const isActiveColor =
          (rating || temporaryRating) &&
          (index < rating || index < temporaryRating);

        let elementColor = isActiveColor
          ? color || DEFAULT_COLOR
          : DEFAULT_UNSELECTED_COLOR;

        return (
          <div
            className="star"
            key={index}
            style={{
              fontSize: iconSize ? `${iconSize}px` : "14px",
              color: elementColor,
              filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`,
            }}
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleClick(index + 1)}
          >
            {icon ? icon : DEFAULT_ICON}
          </div>
        );
      })}
    </div>
  );
}
