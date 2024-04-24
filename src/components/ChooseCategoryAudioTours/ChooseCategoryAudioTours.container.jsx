import { useState, useEffect } from "react";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import ChooseCategoryAudioToursView from "./ChooseCategoryAudioTours.view";
import { useParams } from "react-router-dom";
export const ChooseCategoryAudioToursContainer = () => {
  const [audioTours, setAudioTours] = useState([]);
  const { id } = useParams();
  const chooseCategoryAudioToursQuery = useQuery(
    ["userChooseCategoryAudioToursData"],
    async () => {
      // Получение данных об аудио-турах
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Categories/category/${id}`
      );
      setAudioTours(data);
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <ChooseCategoryAudioToursView
      chooseCategoryAudioToursQuery={chooseCategoryAudioToursQuery}
      audioTours={audioTours}
    />
  );
};
