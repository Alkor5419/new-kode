import React from "react";
import styled from "styled-components";
import NotFoundLoop from "../../../../assets/icons/notFound.svg";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NotFoundIcon = styled.img`
  width: 56px;
  height: 56px;
  margin-top: 149px;
  margin-bottom: 8px;
`;
const TopText = styled.p`
  font-family: "InterSemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: #050510;
  margin-bottom: 12px;
`;
const Text = styled.p`
  font-family: "InterRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #97979b;
`;
export const NotFound = () => {
  return (
    <Wrap>
      <NotFoundIcon src={NotFoundLoop} alt="notFound" />
      <TopText>Мы никого не нашли</TopText>
      <Text>Попробуй скорректировать запрос</Text>
    </Wrap>
  );
};
