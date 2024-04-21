import { useState, useEffect } from "react";
import UserAudioTourView from "./UserAudioTour.view";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

export const UserAudioTourContainer = () => {
  const [audioTours, setAudioTours] = useState([]);
  const userAudioTourQuery = useQuery(
    ["userAudioToursData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/AudioTour/user`
      );
      setAudioTours(data);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );


  const onDeleteTour = async (audioTourId) => {
    try {
      await $authHost.delete(
        `${process.env.REACT_APP_URL}/AudioTour/${audioTourId}`
      );
      setAudioTours((prevTours) =>
        prevTours.filter((tour) => tour.audioTourId !== audioTourId)
      );
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };


  return (
    <UserAudioTourView
      userAudioTourQuery={userAudioTourQuery}
      audioTours={audioTours}
      onDeleteTour={onDeleteTour}
    />
  );
};
