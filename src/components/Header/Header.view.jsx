import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../asserts/images/logo_dip.png";
import Exit from "../../asserts/images/logout.svg";
import User from "../../asserts/images/account.svg";
import CategoriesLogo from "../../asserts/images/category.svg";
import AddLogo from "../../asserts/images/add_circle.svg";
import AllLogo from "../../asserts/images/dictionary.svg";
import BookMarkLogo from "../../asserts/images/bookmarks.svg";
import UserAudioTours from "../../asserts/images/contact.svg";
import Courses from "../../asserts/images/school.svg";
import {
  PERSONAL_ACCOUNT,
  CREATE_AUDIO_TOUR,
  All_AUDIO_TOUR,
  USER_AUDIO_TOUR,
  AUDIO_TOUR_BOOKMARK,
  CATEGORIES_TOUR,
} from "../../navigation/routes";

import style from "../Header/Header.module.css";

const HeaderView = ({ exit }) => {
  const userAuthentication = useSelector((state) => state.user.isAuth);
  const userRole = useSelector((state) => state.user.role);
  return (
    <>
      <div className={style.header}>
        <NavLink to="/" className={style.logo_header}>
          <img src={Logo} alt="Logo VF" className={style.img_logo_header} />
        </NavLink>
        {userAuthentication ? (
          <>
            <div className={style.navigation_header}>
              <NavLink to="/" className={style.active_header}>
                Home
              </NavLink>
              <NavLink to={PERSONAL_ACCOUNT}>
                <img className={style.user} src={User} />
              </NavLink>
              <div className={style.tours}>
                {userRole === "admin" && (
                  <NavLink to={CREATE_AUDIO_TOUR}>
                    <img className={style.user} src={AddLogo} />
                  </NavLink>
                )}
                <NavLink to={All_AUDIO_TOUR}>
                  <img className={style.user} src={AllLogo} />
                </NavLink>
                {userRole === "admin" && (
                  <NavLink to={USER_AUDIO_TOUR}>
                    <img className={style.user} src={UserAudioTours} />
                  </NavLink>
                )}
                <NavLink to={AUDIO_TOUR_BOOKMARK}>
                  <img className={style.user} src={BookMarkLogo} />
                </NavLink>
                <NavLink to={CATEGORIES_TOUR}>
                  {" "}
                  <img className={style.user} src={CategoriesLogo} />
                </NavLink>
              </div>
              <div className={style.courses}>
                <NavLink to="#">
                  <img className={style.user} src={AddLogo} />
                </NavLink>
                <NavLink to="#">
                  <img className={style.user} src={Courses} />
                </NavLink>
                <NavLink to="#">
                  <img className={style.user} src={BookMarkLogo} />
                </NavLink>
                <NavLink to="#">
                  {" "}
                  <img className={style.user} src={CategoriesLogo} />
                </NavLink>
              </div>
              <button className={style.header__exit} onClick={exit}>
                <img src={Exit} />
              </button>
              
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default HeaderView;
