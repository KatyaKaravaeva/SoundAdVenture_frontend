import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../asserts/images/logo_dip.png";
import Exit from "../../asserts/images/logout.svg";
import User from "../../asserts/images/account.svg";

import { PERSONAL_ACCOUNT, CREATE_AUDIO_TOUR, All_AUDIO_TOUR} from "../../navigation/routes";

import style from "../Header/Header.module.css";

const HeaderView = ({ exit }) => {
  const userAuthentication = useSelector((state) => state.user.isAuth);
  return (
    <>
      {}
      <div className={style.header}>
        <NavLink to="/" className={style.logo_header}>
          <img src={Logo} alt="Logo VF" className={style.img_logo_header} />
        </NavLink>
        {userAuthentication ? (
          <>
            <div className={style.navigation_header}>
              <NavLink to="/" className={style.active}>
                Home
              </NavLink>
              <NavLink to={PERSONAL_ACCOUNT}>
                <img className={style.user} src={User} />
              </NavLink>
              <NavLink to={CREATE_AUDIO_TOUR}>Create Audio tours</NavLink>
              <NavLink to={All_AUDIO_TOUR}>All Audio tours</NavLink>
              <NavLink to="#">Audio tour bookmarks</NavLink>
              <NavLink to="#">Сourses</NavLink>
              <NavLink to="#">Сourses bookmarks</NavLink>
            </div>
            <button className={style.header__exit} onClick={exit}>
              <img src={Exit} />
            </button>
          </>
        ) : null}
      </div>
    </>
  );
};

export default HeaderView;
