import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";
import CourseCategoriesView from "./CourseCategories.view";

export const CourseCategoriesContainer = () => {
  const categoriesQuery = useQuery(
    ["categoriesData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/CourseCategories/tour/all`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return <CourseCategoriesView categoriesQuery={categoriesQuery} />;
};
