import React from "react";
import styled from "styled-components";
import { Departments } from "./molecules/departments";
import { SearchInput } from "./molecules/searchInput";

const Title = styled.h1`
  font-family: "InterBold";
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: #050510;
  margin-top: 16px;
  margin-left: 24px;
`;

export const UsersList = () => {
  return (
    <>
      <Title>Поиск</Title>
      <SearchInput />
      <Departments />
    </>
  );
};
