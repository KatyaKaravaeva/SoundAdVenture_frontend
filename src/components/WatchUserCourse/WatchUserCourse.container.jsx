import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";
import { useState } from "react";
import { useParams } from "react-router-dom";
import WatchUserCourseView from "./WatchUserCourse.view";

export const WatchUserCourseContainer = () => {
  const { id } = useParams();
  const [audioTour, setCourse] = useState(null);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [newCommentText, setNewCommentText] = useState("");

  const userCourseQuery = useQuery(
    ["updateWatchUserCoursesData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Course/${id}`
      );
      setCourse(data);
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

  const handleAddTag = async (e) => {
    e.preventDefault();
    try {
      const { data } = await $authHost.post(`/CourseTag/tour/${id}`, {
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
      const { data } = await $authHost.delete(`/CourseTag/guide/${id}/${tagId}`);
      setTags(data);
    } catch (error) {
      console.error("Failed to remove tag:", error);
    }
  };

  const handleSetCategory = async (e) => {
    e.preventDefault();
    try {
      const { data } = await $authHost.post(`/CourseCategories/tour/${id}`, {
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
      await $authHost.delete(`/CourseCategories/tour/${id}`);
      setCategory("");
    } catch (error) {
      console.error("Failed to remove category:", error);
    }
  };

  const handleAddComment = async (commentText) => {
    try {
      if (!commentText.trim()){
        alert("Комментарий не может быть пустым!");
        return;
      }
      const { data } = await $authHost.post(`/CourseComment/add/${id}`, {
        text: commentText,
      });
      setComments(data);
      setNewCommentText("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <WatchUserCourseView
      userCourseQuery={userCourseQuery}
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
    />
  );
};
