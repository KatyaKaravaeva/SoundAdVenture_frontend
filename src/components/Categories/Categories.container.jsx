import { useQuery } from "react-query";
import { $authHost } from "../../services/api.service";
import CategoriesView from "./Categories.view";

export const CategoriesContainer = () => {
  const categoriesQuery = useQuery(
    ["categoriesData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Categories/tour/all`
      );
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  return <CategoriesView categoriesQuery={categoriesQuery} />;
};
