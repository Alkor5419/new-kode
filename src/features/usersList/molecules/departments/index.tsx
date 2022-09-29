import React from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-left: 16px;
`;
const ListItem = styled.li`
  padding: 5px 8px;
  color: #97979b;
  font-family: "InterRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  cursor: pointer;
`;
export const Departments = () => {
  return (
    <div>
      <ListWrapper>
        <ListItem>Все</ListItem>
        <ListItem>Designers</ListItem>
        <ListItem>Analysts</ListItem>
        <ListItem>Managers</ListItem>
        <ListItem>iOS</ListItem>
        <ListItem>Android</ListItem>
      </ListWrapper>
    </div>
  );
};
