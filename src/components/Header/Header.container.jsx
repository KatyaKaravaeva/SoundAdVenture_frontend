import HeaderView from "./Header.view";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/actions/userActions";

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  function exit() {
    dispatch(setUserData({ isAuth: false }));
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
  }
  return <HeaderView exit={exit} />;
};
