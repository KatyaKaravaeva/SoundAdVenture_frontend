import { useState, useEffect } from "react";
import AllCoursesView from "./AllCourses.view";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

export const AllCoursesContainer = () => {
  const [courses, setCourses] = useState([]);
  const [bookmarks, setBookmarks] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const AllCoursesQuery = useQuery(
    ["userAllCoursesData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Course/all`
      );
      const { data: dataBookmarks } = await $authHost.get(
        `${process.env.REACT_APP_URL}/CourseBookMark`
      );

      const bookmarksMap = {};
      dataBookmarks.forEach((bookmark) => {
        bookmarksMap[bookmark.courseId] = true;
      });

      setCourses(data);
      setBookmarks(bookmarksMap);
      return data;
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

  async function handleSearch() {
    try {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Course/search?searchTerm=${searchQuery}`
      );
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AllCoursesView
      AllCoursesQuery={AllCoursesQuery}
      courses={courses}
      makeBookmark={makeBookmark}
      bookmarks={bookmarks}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      handleSearch={handleSearch}
    />
  );
};
