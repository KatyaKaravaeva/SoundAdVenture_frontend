import { Link } from "react-router-dom";
import style from "./Categories.module.css";
import { All_AUDIO_TOUR } from "../../navigation/routes";
const CategoriesView = ({ categoriesQuery }) => {
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
          <Link to={All_AUDIO_TOUR} class="alert-link">
            Посмотреть все аудиоэкскурсии
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={style.categoriesContainer}>
      <h2>Categories</h2>
      <ul className={style.categoryList}>
        {console.log(data)}
        {data.map((category) => (
          <li key={category.audioTourId} className={style.categoryItem}>
            <Link to={`/category/${category.audioTourId}`} className={style.categoryLink}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesView;
