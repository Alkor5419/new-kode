import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BackIcon from "../../../../assets/icons/back.svg";
import { User } from "../../../../shared/model";
import { convert } from "../../../../utils/convertDepartment";

const Header = styled.div`
  position: relative;
  background-color: #f7f7f8;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Back = styled.img`
  width: 6px;
  height: 10px;
  position: absolute;
  top: 28px;
  left: 32px;
`;
const ProfileImg = styled.img`
  width: 104px;
  height: 104px;
  filter: drop-shadow(0px 1px 5px rgba(22, 30, 52, 0.039))
    drop-shadow(0px 8px 12px rgba(22, 30, 52, 0.08));
  border-radius: 64px;
  margin-top: 72px;
  margin-bottom: 24px;
`;
const Name = styled.span`
  font-family: "InterBold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #050510;
`;
const UserTag = styled.span`
  font-family: "InterRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: #97979b;
  margin-top: 12px;
`;
const Department = styled.p`
  font-family: "InterRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #55555c;
`;
interface IProps {
  user: User | undefined;
}
export const TopProfile: React.FC<IProps> = ({ user }) => {
  return (
    <Header>
      <Link to="/">
        <Back src={BackIcon} alt="back" />
      </Link>
      <ProfileImg src={user?.avatarUrl} alt="avatar" />
      <div>
        <Name>
          {user?.firstName} {user?.lastName}
        </Name>{" "}
        <UserTag>{user?.userTag}</UserTag>
      </div>
      <Department>{convert(user?.department)}</Department>
    </Header>
  );
};
