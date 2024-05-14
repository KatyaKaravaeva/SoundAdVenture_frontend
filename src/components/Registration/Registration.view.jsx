import { AUTHORIZATION } from "../../navigation/routes";
import { NavLink } from "react-router-dom";
import style from "../../asserts/styles/auth.module.css";

const RegistrationView = ({ handleSubmit }) => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <form name="registration" onSubmit={(e) => handleSubmit(e)}>
          <h1>Регистрация</h1>
          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Имя"
              name="registration[name]"
              required
            />
          </div>
          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Отчество"
              name="registration[patronymic]"
              required
            />
          </div>

          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Фамилия"
              name="registration[lastname]"
              required
            />
          </div>

          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Логин"
              name="registration[login]"
              required
            />
          </div>

          <div className={style.input_box}>
            <input
              type="password"
              placeholder="Пароль"
              name="registration[password]"
              required
            />
          </div>
          <button type="submit" className={style.btn}>
            Зарегистрироваться
          </button>
          <div className={style.form_group}>
            <NavLink to={AUTHORIZATION} className={style.form_group__a}>
              Вход
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationView;
