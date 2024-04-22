import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateWatchUserAudioTourView from "./UpdateWatchUserAudioTour.view";

export const UpdateWatchUserAudioTourContainer = () => {
  const { id } = useParams();
  const [audioTour, setAudioTour] = useState(null);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [comments, setComments] = useState([]); // Добавлено состояние для хранения комментариев
  const [showComments, setShowComments] = useState(false); // Добавлено состояние для отображения/скрытия комментариев

  const userAudioTourQuery = useQuery(
    ["userAudioToursData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/AudioTour/${id}`
      );
      setAudioTour(data);
      setCategory(data.category);
      setTags(data.tags);
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
      setTags([...tags, data]);
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
  // const fetchComments = async () => {
  //   try {
  //     const { data } = await $authHost.get(`/Comment/${id}`);
  //     setComments(data);
  //   } catch (error) {
  //     console.error("Failed to fetch comments:", error);
  //   }
  // };

  const handleAddComment = async (comment) => {
    try {
      var { data } = await $authHost.post(`/Comment/add/${id}`, {
        text: comment,
      });
      setComments([...comments, data]);
      // После добавления комментария обновляем список комментариев
      //fetchComments();
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
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
      onAddComment={handleAddComment} // Передаем функцию добавления комментария
      showComments={showComments}
      setShowComments={setShowComments} // Передаем функцию для отображения/скрытия комментариев
    />
  );
};
