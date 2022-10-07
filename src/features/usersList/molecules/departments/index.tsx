import React, { useState } from "react";
import styled from "styled-components";
import {
  getUsers,
  getUsersAnalytics,
  getUsersAndroid,
  getUsersDesigners,
  getUsersIos,
  getUsersManagement,
} from "../../../../app/store/usersSlice";
import { useAppDispatch } from "../../../../utils/hooks/redux";

const ListWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-left: 16px;
`;
const ListItem = styled.li`
  padding: 5px 8px;

  font-family: "InterRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;
const AllListItem = styled(ListItem)<{
  department: string;
}>`
  border-bottom: ${(props) =>
    props.department === "all"
      ? "2px solid #6534FF"
      : "none"};
  color: ${(props) =>
    props.department === "all" ? "#050510" : "#97979b"};
`;
const DesignersListItem = styled(ListItem)<{
  department: string;
}>`
  border-bottom: ${(props) =>
    props.department === "designers"
      ? "2px solid #6534FF"
      : "none"};
  color: ${(props) =>
    props.department === "designers"
      ? "#050510"
      : "#97979b"};
`;
const AnalyticsListItem = styled(ListItem)<{
  department: string;
}>`
  border-bottom: ${(props) =>
    props.department === "analytics"
      ? "2px solid #6534FF"
      : "none"};
  color: ${(props) =>
    props.department === "analytics"
      ? "#050510"
      : "#97979b"};
`;
const ManagersListItem = styled(ListItem)<{
  department: string;
}>`
  border-bottom: ${(props) =>
    props.department === "managers"
      ? "2px solid #6534FF"
      : "none"};
  color: ${(props) =>
    props.department === "managers"
      ? "#050510"
      : "#97979b"};
`;
const IosListItem = styled(ListItem)<{
  department: string;
}>`
  border-bottom: ${(props) =>
    props.department === "ios"
      ? "2px solid #6534FF"
      : "none"};
  color: ${(props) =>
    props.department === "ios" ? "#050510" : "#97979b"};
`;
const AndroidListItem = styled(ListItem)<{
  department: string;
}>`
  border-bottom: ${(props) =>
    props.department === "android"
      ? "2px solid #6534FF"
      : "none"};
  color: ${(props) =>
    props.department === "android" ? "#050510" : "#97979b"};
`;
const Line = styled.div`
  background: #c3c3c6;
  width: 100%;
  height: 1px;
  margin-top: -17px;
  margin-bottom: 22px;
`;
export const Departments = () => {
  const dispatch = useAppDispatch();
  const [department, setDepartment] =
    useState<string>("all");
  const onClickAllDep = () => {
    setDepartment("all");
    dispatch(getUsers());
  };
  const onClickDesignersDep = () => {
    setDepartment("designers");
    dispatch(getUsersDesigners());
  };
  const onClickAnalyticsDep = () => {
    setDepartment("analytics");
    dispatch(getUsersAnalytics());
  };
  const onClickManagersDep = () => {
    setDepartment("managers");
    dispatch(getUsersManagement());
  };
  const onClickIosDep = () => {
    setDepartment("ios");
    dispatch(getUsersIos());
  };
  const onClickAndroidDep = () => {
    setDepartment("android");
    dispatch(getUsersAndroid());
  };
  return (
    <div>
      <ListWrapper>
        <AllListItem
          department={department}
          onClick={onClickAllDep}
        >
          Все
        </AllListItem>
        <DesignersListItem
          department={department}
          onClick={onClickDesignersDep}
        >
          Designers
        </DesignersListItem>
        <AnalyticsListItem
          department={department}
          onClick={onClickAnalyticsDep}
        >
          Analysts
        </AnalyticsListItem>
        <ManagersListItem
          department={department}
          onClick={onClickManagersDep}
        >
          Managers
        </ManagersListItem>
        <IosListItem
          department={department}
          onClick={onClickIosDep}
        >
          iOS
        </IosListItem>
        <AndroidListItem
          department={department}
          onClick={onClickAndroidDep}
        >
          Android
        </AndroidListItem>
      </ListWrapper>
      <Line />
    </div>
  );
};
