import { Link } from "react-router-dom";
import style from "./Categories.module.css";

const CategoriesView = ({ categoriesQuery }) => {
  const { isLoading, isError, data } = categoriesQuery;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className={style.categoriesContainer}>
      <h2>Categories</h2>
      <ul className={style.categoryList}>
        {data.map((category) => (
          <li key={category.id} className={style.categoryItem}>
            <Link to={`/category/${category.id}`} className={style.categoryLink}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesView;
