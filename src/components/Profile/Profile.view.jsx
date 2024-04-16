import styles from "./Profile.module.css";
import UserLogo from "../../asserts/images/account.svg";
const ProfileView = ({
  profileQuery,
  isActive,
  setIsActive,
  handleSubmit,
  userData,
  setUserData
}) => {
  if (profileQuery.isLoading || profileQuery.isRefetching) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <div className ={styles.container}>
      <form className={styles.profile} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.profile__frame}>
          <img
            className={styles.profile__picture}
            src={UserLogo}
            alt="Profile Picture"
          />
          <h2 className={styles.profile__name}>
            {userData.name + " " + userData.lastname}
          </h2>
        </div>
        <div className={styles.profile__info}>
          <label className={styles.profile__label}>Имя</label>
          <input
            className={styles.profile__input}
            type="text"
            placeholder="Введите имя пользователя"
            disabled={!isActive}
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <label className={styles.profile__label}>Отчество</label>
          <input
            className={styles.profile__input}
            type="text"
            placeholder="Введите отчество пользователя"
            disabled={!isActive}
            value={userData.patronymic}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                patronymic: e.target.value,
              }))
            }
          />
          <label className={styles.profile__label}>Фамилия</label>
          <input
            className={styles.profile__input}
            type="text"
            placeholder="Введите фамилию пользователя"
            disabled={!isActive}
            value={userData.lastname}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                lastname: e.target.value,
              }))
            }
          />
          <label className={styles.profile__label}>Email</label>
          <input
            className={styles.profile__input}
            type="text"
            placeholder="Введите Email пользователя"
            disabled={!isActive}
            value={userData.login}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                login: e.target.value,
              }))
            }
          />
        </div>
        <button
          className={styles.profile__button}
          onClick={() => setIsActive((prev) => !prev)}
        >
          {!isActive ? "Редактировать" : "Сохранить"}
        </button>
      </form>
    </div>
  );
};

export default ProfileView;
