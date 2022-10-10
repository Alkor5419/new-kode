import React from "react";
import styled from "styled-components";
import { getUsers } from "../../../../app/store/usersSlice";
import Ship from "../../../../assets/icons/ship.svg";
import { useAppDispatch } from "../../../../utils/hooks/redux";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShipIcon = styled.img`
  width: 56px;
  height: 56px;
  margin-top: 134px;
  margin-bottom: 8px;
`;
const TopText = styled.p`
  font-family: "InterSemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: #050510;
  text-align: center;
  margin-bottom: 12px;
`;
const MiddleText = styled.p`
  font-family: "InterRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #97979b;
  text-align: center;
  margin-bottom: 12px;
`;
const RefreshText = styled.p`
  font-family: "InterSemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #6534ff;
  cursor: pointer;
  text-align: center;
`;
interface IProps {
  setDepartment: (arg: string) => void;
}
export const ErrorMessage: React.FC<IProps> = ({
  setDepartment,
}) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    setDepartment("all");
    dispatch(getUsers());
  };
  return (
    <Wrap>
      <ShipIcon src={Ship} alt="ship" />
      <TopText>Какой-то сверхразум все сломал</TopText>
      <MiddleText>Постараемся быстро починить</MiddleText>
      <RefreshText onClick={handleClick}>
        Попробовать снова
      </RefreshText>
    </Wrap>
  );
};
