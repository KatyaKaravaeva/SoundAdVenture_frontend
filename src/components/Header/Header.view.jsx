import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../../asserts/images/logo_dip.png";
import Exit from "../../asserts/images/logout.svg";

// import styles from "./Header.module.css";
// import {
//   PROFILE,
//   ROOT,
//   CATEGORIES,
//   USER_POSTS,
//   BOOKMARKS,
//   CREATE_ARTICLE,
// } from "../../navigation/routes";

import style from "../Header/Header.module.css";

const HeaderView = ({ exit }) => {
  const userAuthentication = useSelector((state) => state.user.isAuth);
  return (
    <>
      <div className={style.header}>
        <div className={style.logo_header}>
          <img src={Logo} alt="Logo VF" className={style.img_logo_header} />
        </div>
        <div className={style.navigation_header}>
          <Link to="#" class="active">
            Home
          </Link>
          <Link to="#">Projetos</Link>
          <Link to="#">Sobre nós</Link>
          <Link to="#">Contato</Link>
        </div>
        <button className={style.header__exit} onClick={exit}>
          <img src={Exit} />
        </button>
      </div>
    </>
  );
};

export default HeaderView;
