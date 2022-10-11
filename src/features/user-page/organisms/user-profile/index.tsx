import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../../utils/hooks/redux";
import moment from "moment";
import "moment/locale/ru";
import { TopProfile } from "../../molecules/top-profile";
import { MoreInfo } from "../../molecules/more-info";

export const UserProfile = () => {
  const { id } = useParams();
  const user = useAppSelector((state) =>
    state.usersReducer.list.find((el) => el.id === id)
  );
  moment.lang("ru");

  return (
    <>
      <TopProfile user={user} />
      <MoreInfo user={user} />
    </>
  );
};
