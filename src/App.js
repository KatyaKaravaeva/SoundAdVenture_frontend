import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";
import Header from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { $authHost } from "./services/api.service";
import { setUserData } from "./redux/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  // useEffect(() => {
  //   const refreshToken = localStorage.getItem("refreshToken"),
  //     accessToken = localStorage.getItem("accessToken");

  //   if (!refreshToken && !accessToken) {
  //     if (user.isAuth)
  //       dispatch(
  //         setUserData({
  //           isAuth: false,
  //         })
  //       );
  //     return;
  //   }
  //   (async () => {
  //     try {
  //       const { data } = await $authHost.get(
  //         `${process.env.REACT_APP_URL}/Auth/user/refresh`
  //       );
  //       dispatch(setUserData({ ...data.user, isAuth: true }));
  //       localStorage.setItem("accessToken", data.accessToken);
  //       localStorage.setItem("refreshToken", data.refreshToken);
  //     } catch (error) {
  //       localStorage.removeItem("accessToken");
  //       localStorage.removeItem("refreshToken");
  //       dispatch(
  //         setUserData({
  //           isAuth: false,
  //         })
  //       );
  //     }
  //   })();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <RouterConfig />
      </BrowserRouter>
    </>
  );
};

export default App;
