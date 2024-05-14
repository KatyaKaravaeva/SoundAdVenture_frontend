import AllUsersControlView from "./AllUsersControl.view";
import { useState } from "react";
import { $authHost } from "../../services/api.service";
import { useQuery } from "react-query";
import ManagePersonData from "../ManagePersonData/ManagePersonData";

export const AllUsersControlContainer = () => {
  const [usersData, setUsersData] = useState({});
  const [isModalOpenNotAll, setIsModalOpenNotAll] = useState(false);
  const [userId, setUserId] = useState(0);

  const handleModalClose = () => {
    setIsModalOpenNotAll(false);
    usersListQuery.refetch();
  };
  const handleModalOpen = (number) => {
    setIsModalOpenNotAll(true);
    setUserId(number);
  };

  const usersListQuery = useQuery(
    ["usersListData"],
    async () => {
      const { data } = await $authHost.get(
        `${process.env.REACT_APP_URL}/Auth/user/all`
      );
      setUsersData(data);
      console.log(usersData);
      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  const deleteUser = async (userId) => {
    try {
      await $authHost.delete(`/Auth/user/${userId}`);
      setUsersData((prevUsersData) =>
        prevUsersData.filter((user) => user.id !== userId)
      );
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <>
      <AllUsersControlView
        usersListQuery={usersListQuery}
        usersData={usersData}
        handleModalOpen={handleModalOpen}
        deleteUser={deleteUser}
      />
      {isModalOpenNotAll && (
        <ManagePersonData
          isOpen={true}
          isDone={true}
          onClose={handleModalClose}
          children={userId}
        ></ManagePersonData>
      )}
    </>
  );
};
