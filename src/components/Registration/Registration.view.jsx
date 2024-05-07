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
};

export default RegistrationView;
