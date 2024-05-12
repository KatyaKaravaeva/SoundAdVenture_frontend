import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import style from "./ManagePersonData.module.css";
import cancelIcon from "../../asserts/images/cancel.svg";
import UserLogo from "../../asserts/images/account.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

const ManagePersonData = ({ isOpen, isDone, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [userData, setUserData] = useState({});
  const [isActive, setIsActive] = useState(false);

  const profileQuery = useQuery(
    ["userProfileData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Auth/user/${children}`
      );
      setUserData((prevUserData) => ({ ...prevUserData, ...data }));
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    if (isActive) return;
    const { lastname, name, patronymic, login, role } = userData;
    try {
      const { data } = await $authHost.put(`/Auth/user/${children}`, {
        lastname,
        name,
        patronymic,
        login,
        role,
      });
      setUserData((prev) => ({ ...prev, ...data }));
    } catch (error) {
      console.log(error);
    }
  }

  return ReactDOM.createPortal(
    <>
      <div className={style.modal}>
        <div className="container">
          <form
            className="p-5 shadow-lg rounded profile_light"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <button className={style.close_button} onClick={closeModal}>
                <img src={cancelIcon} alt="Close" />
              </button>
            </div>
            <div className="d-flex flex-column align-items-center mb-4 profile_light_data">
              <img
                className="rounded-circle mb-3"
                src={UserLogo}
                width="120px"
                height="120px"
                alt="Profile Picture"
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
                  setUserData((prev) => ({
                    ...prev,
                    patronymic: e.target.value,
                  }))
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
            <div className="mb-3">
              <label className="form-label">Роль</label>
              <select
                className="form-control"
                disabled={!isActive}
                value={userData.role}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, role: e.target.value }))
                }
              >
                <option value="admin" selected={userData.role === "admin"}>
                  Администратор
                </option>
                <option
                  value="registered"
                  selected={userData.role === "registered"}
                >
                  Зарегистрированный
                </option>
              </select>
            </div>
            <div className={style.profile_button}>
              <button
                type="submit"
                className="btn profile_button"
                onClick={() => setIsActive((prev) => !prev)}
              >
                {!isActive ? "Редактировать" : "Сохранить"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default ManagePersonData;
