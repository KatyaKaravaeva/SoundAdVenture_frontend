import { NavLink } from "react-router-dom";
import { REGISTRATION } from "../../navigation/routes";
import style from "../../asserts/styles/auth.module.css";

const AuthorizationView = ({ handleSubmit }) => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <form name="signIn" onSubmit={(e) => handleSubmit(e)}>
          <h1>Вход</h1>
          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Логин"
              name="signIn[login]"
              required
            />
          </div>
          <div className={style.input_box}>
            <input
              type="password"
              placeholder="Пароль"
              name="signIn[password]"
              required
            />
          </div>
          <button type="submit" className={style.btn}>
            Войти
          </button>
          <div className={style.form_group}>
            <NavLink to={REGISTRATION} className={style.form_group__a}>
              Регистрация
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthorizationView;
