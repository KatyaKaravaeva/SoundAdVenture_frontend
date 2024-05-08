import { Link } from "react-router-dom";
import style from "./MainPage.module.css";
import { All_AUDIO_TOUR, All_COURSES } from "../../navigation/routes";
const MainPageView = () => {
  return (
    <div>
      <section className={style.hero}>
        <div className={style.container}>
          <div className={style.hero_copy}>
            <h1 className={`${style.hero_title} ${style.mt_0}`}>
              Добро пожаловать!
            </h1>
            <p className={style.hero_paragraph}>
              Здесь вы найдете увлекательные аудиоэкскурсии и образовательные
              курсы, посвященные достопримечательностям. Погрузитесь в
              удивительный мир истории и культуры!
            </p>
            <div className={style.hero_cta}>
              <Link
                className={`${style.button} ${style.button_primary}`}
                to={All_AUDIO_TOUR}
              >
                Audio Tours
              </Link>
              <Link className={style.button} to={All_COURSES}>
                Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPageView;
