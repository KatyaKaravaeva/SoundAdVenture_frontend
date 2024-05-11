import { useState, useEffect } from "react";
import AllAudioTourView from "./AllAudioTour.view";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

export const AllAudioTourContainer = () => {
  const [audioTours, setAudioTours] = useState([]);
  const [bookmarks, setBookmarks] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const AllAudioTourQuery = useQuery(
    ["userAllAudioTourData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/AudioTour/all`
      );
      const { data: dataBookmarks } = await $authHost.get(
        `${process.env.REACT_APP_URL}/BookMark`
      );

      const bookmarksMap = {};
      dataBookmarks.forEach((bookmark) => {
        bookmarksMap[bookmark.audioTourId] = true;
      });

      setAudioTours(data);
      setBookmarks(bookmarksMap);
      console.log(bookmarksMap);
      return data;
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

  async function handleSearch() {
    try {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/AudioTour/search?searchTerm=${searchQuery}`
      );
      setAudioTours(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AllAudioTourView
      AllAudioTourQuery={AllAudioTourQuery}
      audioTours={audioTours}
      makeBookmark={makeBookmark}
      bookmarks={bookmarks}
      setSearchQuery={setSearchQuery}
      searchQuery={searchQuery}
      handleSearch={handleSearch}
    />
  );
};
