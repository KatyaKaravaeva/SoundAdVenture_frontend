import { useState } from "react";
import AllAudioTourView from "./AllAudioTour.view";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

export const AllAudioTourContainer = () => {
  const [audioTours, setAudioTours] = useState([]);
  const AllAudioTourQuery = useQuery(
    ["userAllAudioTourData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/AudioTour/all`
      );
      setAudioTours(data);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return <AllAudioTourView AllAudioTourQuery={AllAudioTourQuery} audioTours={audioTours} />;
};
