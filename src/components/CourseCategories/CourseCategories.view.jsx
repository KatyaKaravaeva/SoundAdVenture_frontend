import { Link } from "react-router-dom";
import style from "./CourseCategories.module.css";
import { All_COURSES, COURSE_CATEGORY } from "../../navigation/routes";
const CourseCategoriesView = ({ categoriesQuery }) => {
  const { isLoading, isError, data } = categoriesQuery;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (data.length === 0) {
    return (
      <div>
        <div class="alert alert-dark" role="alert">
          <span>Здесь пусто. </span>
          <Link to={All_COURSES} class="alert-link">
            Посмотреть все образовательные курсы
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.categoriesContainer}>
      <h2>Категории</h2>
      <ul className={style.categoryList}>
        {console.log(data)}
        {data.map((category, index) => (
          <li key={index} className={style.categoryItem}>
            <Link
              to={`${COURSE_CATEGORY}/${category}`}
              className={style.categoryLink}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCategoriesView;
