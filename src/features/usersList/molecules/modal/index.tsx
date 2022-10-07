import React from "react";
import styled from "styled-components";
import {
  alphabetSort,
  dateSort,
  toggleModal,
} from "../../../../app/store/usersSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../utils/hooks/redux";
import Close from "../../../../assets/icons/close.svg";
import Circle from "../../../../assets/icons/circle.svg";
import CircleHuge from "../../../../assets/icons/circle-huge.svg";

const CloseWrap = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  position: absolute;
  top: 24px;
  right: 23px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #f7f7f8;
  }
`;
const CloseIcon = styled.img``;
const MyModal = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background: rgba(5, 5, 16, 0.16);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrap = styled.div`
  border-radius: 20px;
  width: 373px;
  height: 192px;
  background-color: #fff;
  position: relative;
`;
const ModalTitle = styled.p`
  font-family: "InterSemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #050510;
  margin-top: 24px;
  text-align: center;
`;
const ModalText = styled.p`
  font-family: "InterMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
  margin-left: 14px;
`;
const CircleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 18px;
  cursor: pointer;
`;
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Modal = () => {
  const dispatch = useAppDispatch();
  const closeModal = () => {
    dispatch(toggleModal());
  };
  const sortOfDate = () => {
    closeModal();
    dispatch(dateSort());
  };
  const sortOfAlphabet = () => {
    closeModal();
    dispatch(alphabetSort());
  };
  const isAlphabetSort = useAppSelector(
    (state) => state.usersReducer.isAlphabetSort
  );
  const isDateSort = useAppSelector(
    (state) => state.usersReducer.isDateSort
  );
  return (
    <MyModal>
      <ModalWrap>
        <ModalTitle>Сортировка</ModalTitle>
        <CloseWrap>
          <CloseIcon
            src={Close}
            alt="close-icon"
            onClick={closeModal}
          />
        </CloseWrap>
        <TextWrap onClick={sortOfAlphabet}>
          <CircleIcon
            src={isAlphabetSort ? CircleHuge : Circle}
            alt="radio"
          />
          <ModalText>По алфавиту</ModalText>
        </TextWrap>
        <TextWrap onClick={sortOfDate}>
          <CircleIcon
            src={isDateSort ? CircleHuge : Circle}
            alt="radio"
          />
          <ModalText>По дню рождения</ModalText>
        </TextWrap>
      </ModalWrap>
    </MyModal>
  );
};
