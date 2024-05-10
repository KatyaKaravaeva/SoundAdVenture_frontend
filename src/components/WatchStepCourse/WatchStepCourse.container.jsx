import WatchStepCourseView from "./WatchStepCourse.view";
import { useParams } from "react-router-dom";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import { useState } from "react";

export const WatchStepCourseContainer = () => {
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(-1);
  const [activeStepType, setActiveStepType] = useState(-1);
  const [articleStepData, setArticleStepData] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [pictureUrl, setPictureUrl] = useState(""); 
  const [videoUrl, setVideoUrl] = useState("");
  
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
        `${process.env.REACT_APP_URL}/CourseSteps/${id}`
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
        `${process.env.REACT_APP_URL}/Course/${id}`
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
        `${process.env.REACT_APP_URL}/ArticleCourseStep/${stepId}`
      );
      setArticleStepData(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getAudio = async (stepId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/AudioCourseStep/${stepId}`
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
  const getPicture = async (stepId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/PictureCourseStep/${stepId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPictureUrl(url); 
      console.log(pictureUrl)
    } catch (error) {
      console.error("Error fetching picture:", error);
    }
  };

  const getVideo = async (stepId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/VideoCourseStep/${stepId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };
  

  return (
    <WatchStepCourseView
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
      pictureUrl={pictureUrl} 
      getPicture={getPicture}
      videoUrl={videoUrl}
      getVideo={getVideo}
    />
  );
};
