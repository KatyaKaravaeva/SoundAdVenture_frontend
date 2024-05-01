import { AUTHORIZATION } from "../../navigation/routes";
import { NavLink } from "react-router-dom";
import style from "../../asserts/styles/auth.module.css";

const RegistrationView = ({ handleSubmit }) => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <form name="registration" onSubmit={(e) => handleSubmit(e)}>
          <h1>Registration</h1>
          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Name"
              name="registration[name]"
              required
            />
          </div>
          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Patronymic"
              name="registration[patronymic]"
              required
            />
          </div>

          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Lastname"
              name="registration[lastname]"
              required
            />
          </div>

          <div className={style.input_box}>
            <input
              type="text"
              placeholder="Login"
              name="registration[login]"
              required
            />
          </div>

          <div className={style.input_box}>
            <input
              type="password"
              placeholder="Password"
              name="registration[password]"
              required
            />
          </div>
          <button type="submit" className={style.btn}>
            Sign up
          </button>
          <div className={style.form_group}>
            <NavLink to={AUTHORIZATION} className={style.form_group__a}>
              Sign in
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );

  {
    /* <div className={styles.auth}>
        <div className={styles.auth__block}>
          <form
            className={styles.auth__form}
            name="registration"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className={styles.auth__logo}>Регистрация</div>
            <div className={styles.row_block}>
              <label
                className={styles.row_block__label}
                htmlFor="registration[login]"
              >
                Логин
              </label>
              <input
                placeholder="Логин"
                className={styles.field}
                form-not-empty="true"
                form-min-value="5"
                required
                autoComplete="true"
                type="text"
                name="registration[login]"
              />
            </div>
            <div className={styles.row_block}>
              <label
                className={styles.row_block__label}
                htmlFor="registration[password]"
              >
                Пароль
              </label>
              <input
                className={styles.field}
                placeholder="Пароль"
                form-not-empty="true"
                form-min-value="5"
                required
                autoComplete="true"
                type="password"
                name="registration[password]"
              />
            </div>
            <div className={styles.row_block}>
              <label
                className={styles.row_block__label}
                htmlFor="registration[name]"
              >
                Никнейм
              </label>
              <input
                placeholder="Никнейм"
                className={styles.field}
                form-not-empty="true"
                required
                autoComplete="true"
                type="text"
                name="registration[name]"
              />
            </div>
            <div className={styles.row_block}>
              <label
                className={styles.row_block__label}
                htmlFor="registration[bank]"
              >
                Реквизиты
              </label>
              <MaskedInput
                mask="9999 9999 9999 9999"
                className={styles.field + " " + styles.masked_input}
                placeholder="Введите номер карты"
                name="registration[bank]"
              />
            </div>
            <div className={styles.row_block}>
              <label
                className={styles.row_block__label}
                htmlFor="registration[data]"
              >
                О себе
              </label>
              <textarea
                className={styles.field_text_area}
                placeholder="Информация о себе"
                form-not-empty="true"
                form-min-value="5"
                required
                autoComplete="true"
                name="registration[data]"
              />
            </div>
            <div className={styles.auth__btns}>
              <button className={styles.button_confirm}>
                Зарегистрироваться
              </button>
            </div>
            <div className={styles.auth__sign_in}>
              <NavLink to={AUTHORIZATION}>Авторизоваться</NavLink>
            </div>
          </form>
        </div>
      </div> */
  }
};

export default RegistrationView;
