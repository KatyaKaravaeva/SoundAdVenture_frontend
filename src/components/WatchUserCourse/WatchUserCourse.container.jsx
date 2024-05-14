import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";
import { useEffect, useState } from "react";
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
  const [avMark, setNewCosetAvMark] = useState(0);
  const [amountMarked, setAmountMarked] = useState(0);
  const [markCounts, setMarkCounts] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  const defaultRating = localStorage.getItem("starRating");

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
      const { data } = await $authHost.delete(
        `/CourseTag/guide/${id}/${tagId}`
      );
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
      if (!commentText.trim()) {
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

  const userCourseMarkQuery = useQuery(
    ["userCourseMarkData"],
    async () => {
      try {
        const { data } = await $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getMark?unitId=${id}&type=0`
        );
        return data;
      } catch (error) {
        const data = { mark: 0 };
        return data;
      }
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const userCourseAveragеMarkQuery = useQuery(
    ["userCourserAveragеMarkData"],
    async () => {
      const [averageMarkResponse, totalMarkCountResponse] = await Promise.all([
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getAverageMark?unitId=${id}&type=0`
        ),
        $authHost.get(
          `${process.env.REACT_APP_URL}/Stars/getTotalMarkCount?unitId=${id}&type=0`
        ),
      ]);

      const data = averageMarkResponse.data;
      const data2 = totalMarkCountResponse.data;

      setAmountMarked(data2);
      setNewCosetAvMark(data);

      return data2;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    const fetchMarkCounts = async () => {
      const [oneStar, twoStars, threeStars, fourStars, fiveStars] =
        await Promise.all([
          $authHost.get(
            `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${id}&type=0&mark=1`
          ),
          $authHost.get(
            `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${id}&type=0&mark=2`
          ),
          $authHost.get(
            `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${id}&type=0&mark=3`
          ),
          $authHost.get(
            `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${id}&type=0&mark=4`
          ),
          $authHost.get(
            `${process.env.REACT_APP_URL}/Stars/getMarkCount?unitId=${id}&type=0&mark=5`
          ),
        ]);

      setMarkCounts({
        1: oneStar.data,
        2: twoStars.data,
        3: threeStars.data,
        4: fourStars.data,
        5: fiveStars.data,
      });
    };

    fetchMarkCounts();
  }, [id]);

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
      defaultRating={defaultRating}
      userCourseMarkQuery={userCourseMarkQuery}
      userCourseAveragеMarkQuery={userCourseAveragеMarkQuery}
      avMark={avMark}
      setNewCosetAvMark={setNewCosetAvMark}
      setAmountMarked={setAmountMarked}
      amountMarked={amountMarked}
      markCounts={markCounts}
      setMarkCounts={setMarkCounts}
    />
  );
};
