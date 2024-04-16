import React, { useState } from "react";
import style from "../CreateAudioTour/CreateAudioTour.module.css";

const CreateAudioTour = ({
  formData,
  handleChange,
  handleSubmit,
  changeHandler,
}) => {
  return (
    <div className={style.container}>
      <div className={style.container__main}>
        <h1 className={style.title}>Create Audio Tour</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={style.label}>Title:</label>
            <input
              className={style.input}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={style.label}>Description:</label>
            <textarea
              className={`${style.input} ${style.textarea}`}
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={style.label}>Path to Picture:</label>
            <input
              className={style.input}
              type="file"
              accept="image/png, image/jpeg"
              name="file"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div>
            <label className={style.label}>Place:</label>
            <input
              className={style.input}
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={style.label}>Address:</label>
            <input
              className={style.input}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <button className={style.button} type="submit">
            Save Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAudioTour;
