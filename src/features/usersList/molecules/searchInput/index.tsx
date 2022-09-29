import React from "react";
import Loop from "../../../../assets/icons/loop.svg";
import Filter from "../../../../assets/icons/filter.svg";
import styled from "styled-components";

const InputWrap = styled.div`
  background-color: #f7f7f8;
  border-radius: 16px;
  margin: 18px 16px 24px;
  padding: 0 14px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LoopIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const FilterIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const StyledInput = styled.input`
  border: none;
  background-color: #f7f7f8;
  outline: none;
  height: 40px;
  width: 100%;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "InterMedium";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #c3c3c6;
  }
  :-ms-input-placeholder {
    font-family: "InterMedium";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: #c3c3c6;
  }
`;
const InputTextWrap = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;
export const SearchInput = () => {
  return (
    <InputWrap>
      <InputTextWrap>
        <LoopIcon src={Loop} alt="loop" />
        <StyledInput placeholder="Введите имя, тег, почту..." />
      </InputTextWrap>
      <FilterIcon src={Filter} alt="filter" />
    </InputWrap>
  );
};
