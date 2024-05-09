import { useState, useEffect } from "react";
import UserCoursesView from "./UserCourses.view";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

export const UserCoursesContainer = () => {
  const [courses, setCourses] = useState([]);
  const userAudioTourQuery = useQuery(
    ["userAudioToursData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Course/user`
      );
      setCourses(data);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );


  const onDeleteTour = async (courseId) => {
    try {
      await $authHost.delete(
        `${process.env.REACT_APP_URL}/Course/${courseId}`
      );
      setCourses((prevTours) =>
        prevTours.filter((tour) => tour.courseId !== courseId)
      );
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };


  return (
    <UserCoursesView
      userAudioTourQuery={userAudioTourQuery}
      courses={courses}
      onDeleteTour={onDeleteTour}
    />
  );
};
