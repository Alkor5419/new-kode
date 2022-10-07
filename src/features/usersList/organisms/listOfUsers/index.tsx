import React, { useEffect } from "react";
import styled from "styled-components";
import { getUsers } from "../../../../app/store/usersSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../utils/hooks/redux";
import { Card } from "../../molecules/card";
import { Departments } from "../../molecules/departments";
import { Modal } from "../../molecules/modal";
import { SearchInput } from "../../molecules/searchInput";

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

  return (
    <>
      {isModal ? <Modal /> : null}
      <Title>Поиск</Title>
      <SearchInput />
      <Departments />
      <Card list={list} />
    </>
  );
};
