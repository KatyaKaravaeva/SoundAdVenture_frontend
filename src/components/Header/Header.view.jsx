import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../asserts/images/logo_dip.png";
import Exit from "../../asserts/images/logout.svg";
import {
  PERSONAL_ACCOUNT,
  CREATE_AUDIO_TOUR,
  All_AUDIO_TOUR,
  USER_AUDIO_TOUR,
  AUDIO_TOUR_BOOKMARK,
  CATEGORIES_TOUR,
  CREATE_COURSE,
  All_COURSES,
  COURSE_BOOKMARK,
  USER_COURSES,
  CATEGORIES_COURSE,
  CONTACT,
  ALL_USERS_CONTROL,
} from "../../navigation/routes";

import style from "../Header/Header.module.css";

const HeaderView = ({ exit }) => {
  const userRole = useSelector((state) => state.user.role);
  const userAuthentication = useSelector((state) => state.user.isAuth);
  const checkAdmin = userRole === "admin";
  const checkSuperAdmin = userRole === "superAdmin";
  const checkRegisteredOrAdmin =
    userRole === "registered" || userRole === "admin" || "null";
  return (
    <>
      <div className={style.header}>
        <NavLink to="/" className={style.logo_header}>
          <img src={Logo} alt="Logо" className={style.img_logo_header} />
        </NavLink>
        {userAuthentication ? (
          <>
            <div className={style.navigation_header}>
              <nav>
                <ul className={style.topmenu}>
                  <li>
                    <NavLink to="/" className={style.active_header}>
                      Домой
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={PERSONAL_ACCOUNT}>Личный кабинет</NavLink>
                  </li>
                  {checkRegisteredOrAdmin && (
                    <li>
                      <span className={style.down}>Аудиогиды</span>
                      <ul className={style.submenu}>
                        <li>
                          {checkAdmin && (
                            <NavLink to={CREATE_AUDIO_TOUR}>
                              Создать аудиогид
                            </NavLink>
                          )}
                        </li>
                        <li>
                          <NavLink to={All_AUDIO_TOUR} className={style.link}>
                            Все аудиогиды
                          </NavLink>
                        </li>
                        <li>
                          {checkAdmin && (
                            <li>
                              <NavLink
                                to={USER_AUDIO_TOUR}
                                className={style.link}
                              >
                                Мои аудиогиды
                              </NavLink>
                            </li>
                          )}
                        </li>
                        <li>
                          <NavLink
                            to={AUDIO_TOUR_BOOKMARK}
                            className={style.link}
                          >
                            Закладки аудиогидов
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={CATEGORIES_TOUR} className={style.link}>
                            Категории аудиогидов
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  )}
                  {checkRegisteredOrAdmin && (
                    <li>
                      <span className={style.down}>Образовательные курсы</span>

                      <ul className={style.submenu}>
                        <li>
                          {checkAdmin && (
                            <NavLink to={CREATE_COURSE}>Создать курс</NavLink>
                          )}
                        </li>
                        <li>
                          <NavLink to={All_COURSES}>Все курсы</NavLink>
                        </li>
                        <li>
                          {checkAdmin && (
                            <NavLink to={USER_COURSES}>Мои курсы</NavLink>
                          )}
                        </li>
                        <li>
                          <NavLink to={COURSE_BOOKMARK}>
                            Закладки курсов
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to={CATEGORIES_COURSE}>
                            Категории курсов
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  )}
                  {checkSuperAdmin && (
                    <li>
                      <NavLink to={ALL_USERS_CONTROL}>
                        Контроль пользователей 
                      </NavLink>
                    </li>
                  )}
                  <li>
                    <NavLink to={CONTACT}>Контакты</NavLink>
                  </li>
                </ul>
              </nav>
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
