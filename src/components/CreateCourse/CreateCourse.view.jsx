import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateCourse = ({
  formData,
  handleChange,
  handleSubmit,
  changeHandler,
}) => {
  return (
    <div
      className="container"
      style={{
        width: "60%",
        height: "60%",
        backgroundColor: "rgb(108 147 163 / 77%)",
        marginTop: "5%",
        padding: "26px",
      }}
    >
      <div className="container__main">
        <h1
          className="title"
          style={{
            fontSize: "24px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Создать образовательный курс
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              className="label"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Заголовок:
            </label>
            <input
              className="input form-control"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                backgroundColor: "#ebf0f1",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              className="label"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Описание:
            </label>
            <textarea
              className="input textarea form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={{
                width: "100%",
                minHeight: "100px",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                resize: "vertical",
                backgroundColor: "#ebf0f1",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              className="label"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Изображение:
            </label>
            <input
              className="input form-control"
              type="file"
              accept="image/png, image/jpeg"
              name="file"
              onChange={(e) => changeHandler(e)}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                backgroundColor: "#ebf0f1",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              className="label"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Место:
            </label>
            <input
              className="input form-control"
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                backgroundColor: "#ebf0f1",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              className="label"
              style={{ display: "block", marginBottom: "8px" }}
            >
              Адрес:
            </label>
            <input
              className="input form-control"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                boxSizing: "border-box",
                backgroundColor: "#ebf0f1",
              }}
            />
          </div>
          <button
            className="button btn btn-primary"
            type="submit"
            style={{
              marginLeft: "0px",
              display: "block",
              width: "100%",
              padding: "10px",
              backgroundColor: "var(--color-dark3-header-active)",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Save Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
