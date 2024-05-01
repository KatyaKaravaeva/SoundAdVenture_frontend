import { useQuery } from "react-query";
import CreateArticleView from "./CreateArticle.view";
import { $authHost } from "../../services/api.service";
import { useState } from "react";

export const CreateArticleContainer = ({ audioTourId }) => {
  const [textEditor, setTextEditor] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const title = target["article[title]"].value;
    if (!title.trim() || !textEditor.trim()) {
      alert("Должны быть заполнены все поля");
      return;
    }
    try {
      const { data } = await $authHost.post("ArticleStep", {
        audioGuideId: audioTourId,
        title,
        text: textEditor,
      });
      alert("Запись создана");
      setTextEditor((prev) => "");
      target["article[title]"].value = "";
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <CreateArticleView
      textEditor={textEditor}
      setTextEditor={setTextEditor}
      handleSubmit={handleSubmit}
    />
  );
};
