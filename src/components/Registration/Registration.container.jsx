import { useDispatch } from "react-redux";
import { $host } from "../../services/api.service";
import RegistrationView from "./Registration.view";
import { setUserData } from "../../redux/actions/userActions";
import Modal from "../Modal/Modal";
import { useState } from "react";

export const RegistrationContainer = () => {
  const [isModalOpenNotAll, setIsModalOpenNotAll] = useState(false);
  const handleModalCloseNotAll = () => {
    setIsModalOpenNotAll(false);
  };
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const target = event.target;
    try {
      const { data } = await $host.post("/Auth/sign_up", {
        login: target["registration[login]"].value,
        password: target["registration[password]"].value,
        name: target["registration[name]"].value,
        lastname: target["registration[lastname]"].value,
        patronymic: target["registration[patronymic]"].value,
      });
      dispatch(setUserData({ ...data.user, isAuth: true }));
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    } catch (error) {
      console.log(error);
      setIsModalOpenNotAll(true);
    }
  };
  return (
    <>
      <RegistrationView handleSubmit={handleSubmit} />
      {isModalOpenNotAll && (
        <Modal isOpen={true} isDone={false} onClose={handleModalCloseNotAll}>
          <p>Некорректные данные для регистрации</p>
        </Modal>
      )}
    </>
  );
};
