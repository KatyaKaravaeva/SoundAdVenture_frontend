import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React, { useRef } from "react";
import UpdateWatchUserAudioTourView from "./UpdateWatchUserAudioTour.view";
import Modal from "../Modal/Modal";

export const UpdateWatchUserAudioTourContainer = () => {
  const { id } = useParams();
  const [audioTour, setAudioTour] = useState(null);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");
  const [addArticle, setAddArticle] = useState(false);
  const [addAudio, setAddAudio] = useState(false);
  const [addPicture, setAddPicture] = useState(false);
  const [isModalOpenNotAll, setIsModalOpenNotAll] = useState(false);
  const [isModalOpenNotUpload, setIsModalOpenNotUpload] = useState(false);

  const fileInputRef = useRef(null);

  const handleModalCloseNotAll = () => {
    setIsModalOpenNotAll(false);
  };

  const handleModalCloseNotUpload = () => {
    setIsModalOpenNotUpload(false);
  };

  const uploadPictureFile = async () => {
    const file = fileInputRef.current.files[0];
    if (!file) {
      setIsModalOpenNotUpload((prev) => !prev);
      return;
    }
    const formData = new FormData();
    formData.append("formFile", file);
    try {
      const { data } = await $authHost.post(`PictureStep/${id}`, formData);
      setIsModalOpenNotAll((prev) => !prev);
      setAddAudio(false);
      setAddPicture(false);
      setAddArticle(false);
      userAudioTourStepsQuery.refetch();
    } catch (error) {
      console.error("Ошибка при загрузке картинки:", error.message);
    }
  };

  const userAudioTourQuery = useQuery(
    ["updateWatchUserAudioToursData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/AudioTour/${id}`
      );
      setAudioTour(data);
      setCategory(data.category);
      setTags(data.tags);
      setComments(data.comments);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const userAudioTourStepsQuery = useQuery(
    ["userAudioTourStepsData"],
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

  const handleAddTag = async (e) => {
    e.preventDefault();
    try {
      const { data } = await $authHost.post(`/Tag/tour/${id}`, {
        audioTourId: audioTour.id,
        name: tagInput,
      });
      setTags(data);
      setTagInput("");
    } catch (error) {
      console.error("Failed to add tag:", error);
    }
  };

  const handleRemoveTag = async (tagId) => {
    try {
      const { data } = await $authHost.delete(`/Tag/guide/${id}/${tagId}`);
      setTags(data);
    } catch (error) {
      console.error("Failed to remove tag:", error);
    }
  };

  const handleSetCategory = async (e) => {
    e.preventDefault();
    try {
      const { data } = await $authHost.post(`/Categories/tour/${id}`, {
        name: categoryInput,
      });
      setCategory(data);
      setCategoryInput("");
    } catch (error) {
      console.error("Failed to set category:", error);
    }
  };

  const handleRemoveCategory = async () => {
    try {
      await $authHost.delete(`/Categories/tour/${id}`);
      setCategory("");
    } catch (error) {
      console.error("Failed to remove category:", error);
    }
  };

  const handleAddComment = async (commentText) => {
    try {
      const { data } = await $authHost.post(`/Comment/add/${id}`, {
        text: commentText,
      });
      setComments(data);
      setNewCommentText("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  const uploadAudioFile = async () => {
    const fileInput = document.querySelector('input[type="file"]');
    console.log(fileInput);
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      setIsModalOpenNotUpload(true);
      return;
    }
    const formData = new FormData();
    formData.append("formFile", fileInput.files[0]);
    try {
      const { data } = await $authHost.post(`AudioStep/${id}`, formData);
      setIsModalOpenNotAll((prev) => !prev);
      setAddAudio(false);
      setAddPicture(false);
      setAddArticle(false);
      userAudioTourStepsQuery.refetch();
    } catch (error) {
      console.error("Ошибка при загрузке аудио файла:", error.message);
    }
  };

  return (
    <>
      <UpdateWatchUserAudioTourView
        userAudioTourQuery={userAudioTourQuery}
        audioTour={audioTour}
        tags={tags}
        category={category}
        comments={comments}
        onAddTag={handleAddTag}
        onRemoveTag={handleRemoveTag}
        onSetCategory={handleSetCategory}
        onRemoveCategory={handleRemoveCategory}
        setCategoryInput={setCategoryInput}
        categoryInput={categoryInput}
        tagInput={tagInput}
        setTagInput={setTagInput}
        onAddComment={handleAddComment}
        showComments={showComments}
        setShowComments={setShowComments}
        newCommentText={newCommentText}
        setNewCommentText={setNewCommentText}
        handleAddComment={handleAddComment}
        setAddArticle={setAddArticle}
        addArticle={addArticle}
        setAddAudio={setAddAudio}
        addAudio={addAudio}
        uploadAudioFile={uploadAudioFile}
        addPicture={addPicture}
        setAddPicture={setAddPicture}
        fileInputRef={fileInputRef}
        uploadPictureFile={uploadPictureFile}
        userAudioTourStepsQuery={userAudioTourStepsQuery}
        id={id}
      />
      {isModalOpenNotAll && (
        <Modal isOpen={true} isDone={true} onClose={handleModalCloseNotAll}>
          <p>Шаг добавлен!</p>
        </Modal>
      )}
      {isModalOpenNotUpload && (
        <Modal isOpen={true} isDone={false} onClose={handleModalCloseNotUpload}>
          <p>Файл не выбран!</p>
        </Modal>
      )}
    </>
  );
};
