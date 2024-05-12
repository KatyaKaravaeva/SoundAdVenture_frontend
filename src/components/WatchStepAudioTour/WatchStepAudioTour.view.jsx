import React, { useEffect, useState } from "react";
import style from "./WatchStepAudioTour.module.css";
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./StepStyle.css";
import Stepper from "@mui/material/Stepper";
import "./style.sass";

const WatchStepAudioTourView = ({
  userAudioTourQuery,
  userAudioTourStepsListQuery,
  activeStep,
  handleStepChange,
  activeStepType,
  handleStepTypeChange,
  articleStepData,
  getArticle,
  getAudio,
  audioUrl,
  pictureUrl,
  getPicture,
}) => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [activeStepId, setActiveStepId] = useState(null);

  useEffect(() => {
    if (userAudioTourStepsListQuery.data) {
      setCompletedSteps(
        new Array(userAudioTourStepsListQuery.data.length).fill(false)
      );
    }
  }, [userAudioTourStepsListQuery.data]);

  const handleStepClick = (index) => {
    const newCompletedSteps = completedSteps.slice();
    newCompletedSteps[index] = true;
    setCompletedSteps(newCompletedSteps);

    handleStepChange(index);
    setActiveStepId(index + 1);
    handleStepTypeChange(userAudioTourStepsListQuery.data[index].type);
    getArticle(userAudioTourStepsListQuery.data[index].id);
    getAudio(userAudioTourStepsListQuery.data[index].id);
    getPicture(userAudioTourStepsListQuery.data[index].id);
  };

  if (
    userAudioTourStepsListQuery.isLoading ||
    userAudioTourStepsListQuery.isRefetching ||
    userAudioTourQuery.isLoading ||
    userAudioTourQuery.isRefetching
  ) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className={style.container__main}>
        <div className={style.container}>
          <div className={style.stepper_container}>
            <div className={style.stepper}>
              <Box sx={{ width: "100%", overflowX: "auto" }}>
                <div className="stepper-container">
                  <Stepper
                    activeStep={activeStep}
                    className="stepper"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "1px",
                      padding: "10px",
                      overflowY: "auto",
                    }}
                  >
                    {userAudioTourStepsListQuery.data.map((step, index) => (
                      <Step
                        key={step.id}
                        completed={completedSteps[index]}
                        onClick={() => handleStepClick(index)}
                        className={style.step}
                      >
                        <StepLabel></StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </div>
              </Box>
            </div>
          </div>
          <div class="container_switch">
            <div class="toggle">
              <input type="checkbox" />
              <span class="button"></span>
              <span class="label">{"<"}</span>
            </div>
            <div class="toggle">
              <input type="checkbox" />
              <span class="button"></span>
              <span class="label">{">"}</span>
            </div>
          </div>
          {activeStepId == null ? (
            <div className={style.stepper_show}>
              <h2>{userAudioTourQuery.data.title}</h2>
              <p>{userAudioTourQuery.data.description}</p>
            </div>
          ) : (
            <div className={style.stepper_show}>
              {activeStepType === 0 && articleStepData && (
                <div className={style.article_step}>
                  <div className={style.step_number}>
                    <p>Шаг {activeStepId}</p>
                  </div>
                  <div>
                    <h2 className={style.article_step__title}>
                      {articleStepData.title}
                    </h2>
                    <div
                      className={style.article_step__text}
                      dangerouslySetInnerHTML={{ __html: articleStepData.text }}
                    />
                  </div>
                </div>
              )}
              {activeStepType === 1 && (
                <div>
                  <div className={style.step_number}>
                    <p>Шаг {activeStepId}</p>
                  </div>
                  {audioUrl && (
                    <audio controls>
                      <source src={audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
              )}
              {activeStepType === 3 && (
                <div>
                  <div className={style.step_number}>
                    <p>Шаг {activeStepId}</p>
                  </div>
                  {pictureUrl && (
                    <img
                      style={{ width: "100%" }}
                      src={pictureUrl}
                      alt="Picture"
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchStepAudioTourView;
