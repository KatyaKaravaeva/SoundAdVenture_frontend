import { useState, useEffect } from "react";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import AllCourseBookMarkView from "./AllCourseBookMark.view";
export const AllCourseBookMarkContainer = () => {
  const [audioTours, setAudioTours] = useState([]);
  const [bookmarks, setBookmarks] = useState({});

  const AllCourseBookMarkQuery = useQuery(
    ["userAllCourseBookMarkData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Course/all`
      );

      const { data: dataBookmarks } = await $authHost.get(
        `${process.env.REACT_APP_URL}/CourseBookMark`
      );

      const audioToursWithBookmarks = [];

      const bookmarksMap = {};
      dataBookmarks.forEach((bookmark) => {
        bookmarksMap[bookmark.courseId] = true;
      });

      data.forEach((tour) => {
        if (bookmarksMap[tour.courseId]) {
          audioToursWithBookmarks.push(tour);
        }
      });

      setAudioTours(audioToursWithBookmarks);
      setBookmarks(bookmarksMap);

      return audioToursWithBookmarks;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  async function makeBookmark(courseId) {
    try {
      if (bookmarks[courseId]) {
        await $authHost.delete(
          `${process.env.REACT_APP_URL}/CourseBookMark/${courseId}`
        );
        setBookmarks((prev) => ({
          ...prev,
          [courseId]: false,
        }));
        setAudioTours((prevAudioTours) =>
          prevAudioTours.filter((tour) => tour.courseId !== courseId)
        );
      } else {
        await $authHost.post(
          `${process.env.REACT_APP_URL}/CourseBookMark/${courseId}`
        );
        setBookmarks((prev) => ({
          ...prev,
          [courseId]: true,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AllCourseBookMarkView
      AllCourseBookMarkQuery={AllCourseBookMarkQuery}
      audioTours={audioTours}
      makeBookmark={makeBookmark}
      bookmarks={bookmarks}
    />
  );
};
