import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./WatchStepAudioTour.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import MuiStepper from "@mui/material/Stepper";
import { WATCH_STEP_TOUR } from "../../navigation/routes";

const WatchStepAudioTourView = ({
  userAudioTourStepsListQuery,
  activeStep,
  handleStepChange,
  activeStepType,
  handleStepTypeChange,
  articleStepData,
  getArticle,
  getAudio,
  audioUrl,
}) => {
  if (
    userAudioTourStepsListQuery.isLoading ||
    userAudioTourStepsListQuery.isRefetching
  ) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.stepper}>
          <Box sx={{ width: "100%" }}>
            <MuiStepper
              activeStep={activeStep}
              orientation="vertical"
              onClick={(step) => handleStepChange(step)}
            >
              {userAudioTourStepsListQuery.data.map((step) => (
                <Step
                  key={step.id}
                  onClick={() => {
                    handleStepChange(step.id);
                    handleStepTypeChange(step.type);
                    //getArticle(step.id);
                    getAudio(step.id);
                  }}
                >
                  <StepLabel>{step.id}</StepLabel>
                </Step>
              ))}
            </MuiStepper>
          </Box>
        </div>
        <div className={style.stepper_show}>
          {activeStepType === 0 && (
            <div className={style.article_step}>
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
              {audioUrl && (
                <audio controls>
                  <source src={audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </div>

            // <div className={style.audio_step}>

            //     <h2 className={style.a_step__title}>
            //       {console.log(audioStepData)}
            //     </h2>
            // </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchStepAudioTourView;
