import { useState, useEffect } from "react";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import AllAudioTourBookMarkView from "./AllAudioTourBookMark.view";
export const AllAudioTourBookMarkContainer = () => {
  const [audioTours, setAudioTours] = useState([]);
  const [bookmarks, setBookmarks] = useState({});

  const AllAudioTourBookMarkQuery = useQuery(
    ["userAllAudioTourBookMarkData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/AudioTour/all`
      );

      const { data: dataBookmarks } = await $authHost.get(
        `${process.env.REACT_APP_URL}/BookMark`
      );

      const audioToursWithBookmarks = [];

      const bookmarksMap = {};
      dataBookmarks.forEach((bookmark) => {
        bookmarksMap[bookmark.audioTourId] = true;
      });

      data.forEach((tour) => {
        if (bookmarksMap[tour.audioTourId]) {
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

  async function makeBookmark(audioTourId) {
    try {
      if (bookmarks[audioTourId]) {
        await $authHost.delete(
          `${process.env.REACT_APP_URL}/BookMark/${audioTourId}`
        );
        setBookmarks((prev) => ({
          ...prev,
          [audioTourId]: false,
        }));
        setAudioTours((prevAudioTours) =>
          prevAudioTours.filter((tour) => tour.audioTourId !== audioTourId)
        );
      } else {
        await $authHost.post(
          `${process.env.REACT_APP_URL}/BookMark/${audioTourId}`
        );
        setBookmarks((prev) => ({
          ...prev,
          [audioTourId]: true,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AllAudioTourBookMarkView
      AllAudioTourBookMarkQuery={AllAudioTourBookMarkQuery}
      audioTours={audioTours}
      makeBookmark={makeBookmark}
      bookmarks={bookmarks}
    />
  );
};
