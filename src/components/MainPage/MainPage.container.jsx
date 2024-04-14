// import { useQuery } from "react-query";
import MainPageView from "./MainPage.view";
// import { $authHost } from "../../services/api.service";
// import { useEffect, useState } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { ROOT } from "../../navigation/routes";

export const MainPageContainer = () => {
  // const [paramSearch] = useSearchParams();
  // const [isSubscribe, setIsSubscribe] = useState(false);
  // const [isSearch, setIsSearch] = useState(false);
  // const [articles, setArticles] = useState([]);
  // const queryLine = paramSearch.get("line");
  // const navigate = useNavigate();

  // useEffect(() => {
  // }, [isSearch, isSubscribe]);

  // async function searchData(event) {
  //   event.preventDefault();
  //   navigate(`${ROOT}?line=${event.target.search.value}`);
  //   event.target.search.value = "";
  // }

  // const mainPageQuery = useQuery(
  //   ["mainPageData", queryLine],
  //   async () => {
  //     const { data } = await $authHost.get(
  //       `${process.env.REACT_APP_URL}/article${
  //         queryLine ? `/search?line=${queryLine}` : ""
  //       }`
  //     );
  //     setArticles(() => [...data]);
  //     return data;
  //   },
  //   {
  //     retry: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  // async function makeBookmark(article) {
  //   try {
  //     const statusBookmark = articles.find(
  //       (x) => x.articleId === article.articleId
  //     ).statusSave;
  //     const { data } = await $authHost.post(
  //       `${process.env.REACT_APP_URL}/user/save/article/${
  //         article.articleId
  //       }?status=${!statusBookmark}`
  //     );
  //     setArticles((prev) =>
  //       prev.map((x) => {
  //         if (article.articleId !== x.articleId) return x;
  //         x.statusSave = !x.statusSave;
  //         return x;
  //       })
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const target = event.target;
  //   try {
  //     const { data } = await $authHost.get(
  //       `${process.env.REACT_APP_URL}${
  //         !isSubscribe && !isSearch ? "/user/subscribtion/article" : "/article"
  //       }`
  //     );
  //     setArticles(() => [...data]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <MainPageView
    // handleSubmit={handleSubmit}
    // articles={articles}
    // mainPageQuery={mainPageQuery}
    // isSubscribe={isSubscribe}
    // setIsSubscribe={setIsSubscribe}
    // makeBookmark={makeBookmark}
    // queryLine={queryLine}
    // searchData={searchData}
    // isSearch={isSearch}
    // setIsSearch={setIsSearch}
    />
  );
};
