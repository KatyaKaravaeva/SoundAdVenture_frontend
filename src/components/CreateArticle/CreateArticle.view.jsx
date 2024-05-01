import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import styles from "./CreateArticle.module.css";
import "../../asserts/styles/reactQuill.css";

const CreateArticleView = ({ textEditor, setTextEditor, handleSubmit }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <div className={styles.create_article__container}>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className={styles.editor}>
          <input
            type="text"
            placeholder="заголовок"
            name="article[title]"
            className={styles.editor__field}
          />
          <div className={styles.editor__container}>
            <ReactQuill
              value={textEditor}
              onChange={setTextEditor}
              modules={modules}
              formats={formats}
              placeholder="Введите текст здесь..."
            />
          </div>
        </div>
        <button className={styles.categories__button}>Добавить</button>
      </form>
    </div>
  );
};

export default CreateArticleView;
