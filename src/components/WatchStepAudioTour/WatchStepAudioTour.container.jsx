import WatchStepAudioTourView from "./WatchStepAudioTour.view";
import { useParams } from "react-router-dom";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import { useState } from "react";


export const WatchStepAudioTourContainer = () => {
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(-1);
  const [activeStepType, setActiveStepType] = useState(-1);
  const [articleStepData, setArticleStepData] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const handleStepChange = (newStep) => {
    setActiveStep(newStep);
  };

  const handleStepTypeChange = (newStepType) => {
    setActiveStepType(newStepType);
  };
  const userAudioTourStepsListQuery = useQuery(
    ["userAudioTourStepsListData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Steps/${id}`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const userAudioTourQuery = useQuery(
    ["updateWatchUserAudioToursTitleData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/AudioTour/${id}`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  async function getArticle(stepId) {
    try {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/ArticleStep/${stepId}`
      );
      setArticleStepData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getAudio = async (stepId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/AudioStep/${stepId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error fetching audio:", error);
    }
  };

  return (
    <WatchStepAudioTourView
    userAudioTourQuery={userAudioTourQuery}
      userAudioTourStepsListQuery={userAudioTourStepsListQuery}
      activeStep={activeStep}
      handleStepChange={handleStepChange}
      activeStepType={activeStepType}
      handleStepTypeChange={handleStepTypeChange}
      articleStepData={articleStepData}
      getArticle={getArticle}
      getAudio={getAudio}
      audioUrl={audioUrl}
    />
  );
};
