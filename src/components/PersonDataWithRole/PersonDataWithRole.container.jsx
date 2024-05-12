import { useState } from "react";
import PersonDataWithRoleView from "./PersonDataWithRole.view";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";

export const PersonDataWithRoleContainer = () => {
  const [userData, setUserData] = useState({});
  const [isActive, setIsActive] = useState(false);
  const profileQuery = useQuery(
    ["userPersonDataWithRoleData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Auth/user/profile`
      );
      setUserData((prevUserData) => ({ ...prevUserData, ...data }));
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    if (isActive) return;
    const {
      lastname,
      name,
      patronymic,
      login,
    } = userData;
    try {
      const { data } = await $authHost.put(`/Auth/user`, {
        lastname,
        name,
        patronymic,
        login
      });
      setUserData((prev) => ({ ...prev, ...data }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <PersonDataWithRoleView
      profileQuery={profileQuery}
      isActive={isActive}
      setIsActive={setIsActive}
      handleSubmit={handleSubmit}
      userData={userData}
      setUserData={setUserData}
    />
  );
};
