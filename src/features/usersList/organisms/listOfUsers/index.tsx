import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUsers } from "../../../../app/store/usersSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../utils/hooks/redux";
import { Card } from "../../molecules/card";
import { Departments } from "../../molecules/departments";
import { ErrorMessage } from "../../molecules/error-message";
import { Modal } from "../../molecules/modal";
import { NotFound } from "../../molecules/notFound";
import { SearchInput } from "../../molecules/searchInput";
import { Skeleton } from "../../molecules/skeleton";

const Title = styled.h1`
  font-family: "InterBold";
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: #050510;
  margin-top: 16px;
  margin-left: 24px;
`;

export const ListOfUsers = () => {
  const [department, setDepartment] =
    useState<string>("all");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const list = useAppSelector(
    (state) => state.usersReducer.list
  );
  const isModal = useAppSelector(
    (state) => state.usersReducer.isModalOpen
  );
  const isLoading = useAppSelector(
    (state) => state.usersReducer.loading
  );
  const isError = useAppSelector(
    (state) => state.usersReducer.error
  );
  const isNotFound = useAppSelector(
    (state) => state.usersReducer.notFound
  );
  return (
    <>
      {isModal ? <Modal /> : null}
      <Title>Поиск</Title>
      <SearchInput />
      <Departments
        department={department}
        setDepartment={setDepartment}
      />
      {isError ? (
        <ErrorMessage setDepartment={setDepartment} />
      ) : isNotFound ? (
        <NotFound />
      ) : !isLoading ? (
        <Card list={list} />
      ) : (
        <Skeleton />
      )}
    </>
  );
};
