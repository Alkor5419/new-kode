import moment from "moment";
import React from "react";
import styled from "styled-components";
import PhoneIcon from "../../../../assets/icons/phone.svg";
import StarIcon from "../../../../assets/icons/star.svg";
import { User } from "../../../../shared/model";
import { convertPhone } from "../../../../utils/convertPhone";

const InfoWrap = styled.div`
  padding: 27px 20px 0 16px;
`;
const Star = styled.img`
  width: 20px;
  height: 19px;
  margin-right: 14px;
`;
const Date = styled.p`
  font-family: "InterMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;
const DateWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Years = styled.p`
  font-family: "InterMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #97979b;
`;
const PhoneWrap = styled.div`
  display: flex;
  align-items: center;
`;
const Phone = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;
const PhoneText = styled.p`
  font-family: "InterMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
`;
interface IProps {
  user: User | undefined;
}
export const MoreInfo: React.FC<IProps> = ({ user }) => {
  return (
    <InfoWrap>
      <Row>
        <DateWrap>
          <Star src={StarIcon} alt="star" />
          <Date>
            {moment(user?.birthday).format("D MMMM YYYY")}
          </Date>
        </DateWrap>

        <Years>
          {moment(user?.birthday).fromNow(true)}
        </Years>
      </Row>
      <PhoneWrap>
        <Phone src={PhoneIcon} alt="phone" />
        <PhoneText>{convertPhone(user?.phone)}</PhoneText>
      </PhoneWrap>
    </InfoWrap>
  );
};
