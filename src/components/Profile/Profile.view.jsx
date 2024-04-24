import UserLogo from "../../asserts/images/account.svg";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Profile.module.css";


const ProfileView = ({
  profileQuery,
  isActive,
  setIsActive,
  handleSubmit,
  userData,
  setUserData,
}) => {
  if (profileQuery.isLoading || profileQuery.isRefetching) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container__main}>
      <div className="container">
        <form
          className="p-5 shadow-lg rounded profile_light"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="d-flex flex-column align-items-center mb-4 profile_light_data">
            <img
              className="rounded-circle mb-3"
              src={UserLogo}
              alt="Profile Picture"
              width="120"
              height="120"
            />
            <h2 className="mb-0">
              {userData.name} {userData.lastname}
            </h2>
          </div>
          <div className="mb-3">
            <label className="form-label">Имя</label>
            <input
              className="form-control"
              type="text"
              placeholder="Введите имя пользователя"
              disabled={!isActive}
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Отчество</label>
            <input
              className="form-control"
              type="text"
              placeholder="Введите отчество пользователя"
              disabled={!isActive}
              value={userData.patronymic}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, patronymic: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Фамилия</label>
            <input
              className="form-control"
              type="text"
              placeholder="Введите фамилию пользователя"
              disabled={!isActive}
              value={userData.lastname}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, lastname: e.target.value }))
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="text"
              placeholder="Введите Email пользователя"
              disabled={!isActive}
              value={userData.login}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, login: e.target.value }))
              }
            />
          </div>
          <button
            type="button"
            className="btn profile_button w-100"
            onClick={() => setIsActive((prev) => !prev)}
          >
            {!isActive ? "Редактировать" : "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileView;
