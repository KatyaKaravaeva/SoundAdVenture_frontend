import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./AllUsersControl.module.css";
import ReactDOM from "react-dom";

const AllUsersControlView = ({
  usersListQuery,
  usersData,
  handleModalOpen,
  deleteUser
}) => {
  if (usersListQuery.isLoading || usersListQuery.isRefetching) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className={style.usersDataInfo}>
        <p>Управление аккаунтами пользователей</p>
      </div>
      <div className={style.usersListCont}>
        <div className={style.usersList}>
          {usersData.map((user) => (
            <div className={style.userCont}>
              <div className={style.userInfoCont}>
                <h3 className={style.userInfoContH3}>
                  {user.lastname} {user.name} {user.patronymic}{" "}
                </h3>
                <p className={style.userInfoContRole}>
                  {user.role === "registered"
                    ? "Зарегистрированный"
                    : "Администратор"}
                </p>
              </div>
              <div className={style.buttonContainer}>
                <button
                  className={style.button_del}
                  onClick={() => deleteUser(user.id)}
                >
                  <svg
                    className={style.editPic}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6l-2 14H7L5 6"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M5 6h14l1-1-1-1H5l-1 1z"></path>
                  </svg>
                </button>
                <button
                  className={style.button}
                  onClick={() => handleModalOpen(user.id)}
                >
                  <svg
                    className={style.editPic}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllUsersControlView;
