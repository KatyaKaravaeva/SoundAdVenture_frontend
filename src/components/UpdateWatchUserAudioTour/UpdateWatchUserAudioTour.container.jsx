import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UpdateWatchUserAudioTourView from "./UpdateWatchUserAudioTour.view";

export const UpdateWatchUserAudioTourContainer = () => {
  const { id } = useParams();
  const [audioTour, setAudioTour] = useState(null); // Исправляем начальное состояние на null
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

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
      // console.log(data);
      setTags(data);
    } catch (error) {
      console.error("Failed to remove tag:", error);
    }
  };

  const handleSetCategory = async () => {
    try {
      await $authHost.post(`/Categories/tour/${audioTour.id}`, {
        name: categoryInput,
      });
      setCategory(categoryInput);
      setCategoryInput("");
    } catch (error) {
      console.error("Failed to set category:", error);
    }
  };

  return (
    <UpdateWatchUserAudioTourView
      userAudioTourQuery={userAudioTourQuery}
      audioTour={audioTour}
      tags={tags}
      category={category}
      onAddTag={handleAddTag}
      onRemoveTag={handleRemoveTag}
      onSetCategory={handleSetCategory}
      setCategoryInput={setCategoryInput}
      tagInput={tagInput}
      setTagInput={setTagInput}
    />
  );
};
