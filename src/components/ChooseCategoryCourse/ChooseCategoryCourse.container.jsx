import { useState, useEffect } from "react";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import ChooseCategoryCourseView from "./ChooseCategoryCourse.view";
import { useParams } from "react-router-dom";
export const ChooseCategoryCourseContainer = () => {
  const [audioTours, setAudioTours] = useState([]);
  const { id } = useParams();
  const chooseCategoryAudioToursQuery = useQuery(
    ["userChooseCategoryCourseData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/CourseCategories/category/${id}`
      );
      setAudioTours(data);
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <ChooseCategoryCourseView
      chooseCategoryAudioToursQuery={chooseCategoryAudioToursQuery}
      audioTours={audioTours}
    />
  );
};
