import React, { useRef, useState } from "react";
import Loop from "../../../../assets/icons/loop.svg";
import LoopBlack from "../../../../assets/icons/loop-black.svg";
import Filter from "../../../../assets/icons/filter.svg";
import styled from "styled-components";
import { useAppDispatch } from "../../../../utils/hooks/redux";
import { toggleModal } from "../../../../app/store/usersSlice";

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
  cursor: pointer;
`;
const LoopIconBlack = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
`;
const FilterIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const StyledInput = styled.input`
  border: none;
  background-color: #f7f7f8;
  outline: none;
  height: 40px;
  width: 100%;
  caret-color: #6534ff;
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
  const [isInputFocus, setIsInputFocus] = useState(false);
  const myRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (null !== myRef.current) {
      myRef.current.focus();
    }
  };
  const openModal = () => {
    dispatch(toggleModal());
  };
  return (
    <InputWrap>
      <InputTextWrap>
        {isInputFocus ? (
          <LoopIconBlack src={LoopBlack} alt="loop" />
        ) : (
          <LoopIcon
            src={Loop}
            alt="loop"
            onClick={handleClick}
          />
        )}
        <StyledInput
          ref={myRef}
          onFocus={() => setIsInputFocus(true)}
          onBlur={() => setIsInputFocus(false)}
          placeholder="Введите имя, тег, почту..."
        />
      </InputTextWrap>
      <FilterIcon
        src={Filter}
        alt="filter"
        onClick={openModal}
      />
    </InputWrap>
  );
};
