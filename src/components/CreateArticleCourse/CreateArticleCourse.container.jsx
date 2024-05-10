import { useQuery } from "react-query";
import CreateArticleCourseView from "./CreateArticleCourse.view";
import { $authHost } from "../../services/api.service";
import { useState } from "react";
import Modal from "../Modal/Modal";

export const CreateArticleCourseContainer = ({
  audioTourId,
  userAudioTourStepsQuery,
}) => {
  const [textEditor, setTextEditor] = useState("");
  const [isModalOpenNotAll, setIsModalOpenNotAll] = useState(false);
  const [isModalOpenUpload, setIsModalOpenUpload] = useState(false);

  const handleModalCloseNotAll = () => {
    setIsModalOpenNotAll(false);
  };

  const handleModalCloseNotUpload = () => {
    setIsModalOpenUpload(false);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const title = target["article[title]"].value;
    if (!title.trim() || !textEditor.trim()) {
      setIsModalOpenNotAll((prev) => !prev);
      return;
    }
    try {
      const { data } = await $authHost.post("ArticleCourseStep", {
        audioGuideId: audioTourId,
        title,
        text: textEditor,
      });
      setTextEditor((prev) => "");
      target["article[title]"].value = "";
      setIsModalOpenUpload((prev) => !prev);
      userAudioTourStepsQuery.refetch();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <CreateArticleCourseView
        textEditor={textEditor}
        setTextEditor={setTextEditor}
        handleSubmit={handleSubmit}
      />
      {isModalOpenNotAll && (
        <Modal isOpen={true} isDone={false} onClose={handleModalCloseNotAll}>
          <p>Должны быть заполнены все поля!</p>
        </Modal>
      )}
      {isModalOpenUpload && (
        <Modal isOpen={true} isDone={true} onClose={handleModalCloseNotUpload}>
          <p>Шаг добавлен!</p>
        </Modal>
      )}
    </>
  );
};
