import AuthorizationView from "./Authorization.view";
import { useDispatch } from "react-redux";
import { $host } from "../../services/api.service";
import { setUserData } from "../../redux/actions/userActions";
import Modal from "../Modal/Modal";
import { useState } from "react";

export const AuthorizationContainer = () => {
  const [isModalOpenNotAll, setIsModalOpenNotAll] = useState(false);
  const handleModalCloseNotAll = () => {
    setIsModalOpenNotAll(false);
  };
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const target = event.target;
    try {
      const { data } = await $host.post("/Auth/sign_in", {
        login: target["signIn[login]"].value,
        password: target["signIn[password]"].value,
      });
      dispatch(
        setUserData({ ...data.user, isAuth: true, role: data.user.role })
      );
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    } catch (error) {
      console.log(error);
      setIsModalOpenNotAll(true);
    }
  };
  return (
    <>
      <AuthorizationView handleSubmit={handleSubmit} />
      {isModalOpenNotAll && (
        <Modal isOpen={true} isDone={false} onClose={handleModalCloseNotAll}>
          <p>Некорректные данные для входа</p>
        </Modal>
      )}
    </>
  );
};
