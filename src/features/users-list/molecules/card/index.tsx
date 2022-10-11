import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { User } from "../../../../shared/model";
import { convert } from "../../../../utils/convertDepartment";
import { convertMonth } from "../../../../utils/convertMonth";
import { useAppSelector } from "../../../../utils/hooks/redux";

const Wrap = styled.div`
  margin: 0 16px;
`;
const ListWrap = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
  text-decoration: none;
`;
const Name = styled.span`
  font-family: "InterMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
`;
const Tag = styled.span`
  font-family: "InterMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #97979b;
`;

const UserImg = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  margin-right: 16px;
`;
const TopTextWrap = styled.div`
  margin-top: 4px;
  margin-bottom: 2px;
`;
const Department = styled.span`
  font-family: "InterRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #55555c;
`;
const YearWrap = styled.div`
  display: flex;
  justify-content: spase-between;
  align-items: center;
  padding: 0 40px;
`;
const Year = styled.p`
  text-align: center;
  font-family: "InterMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #c3c3c6;
  width: 184px;
`;
const Line = styled.div`
  height: 1px;
  flex: 1;
  background-color: #c3c3c6;
`;
const CartWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DateText = styled.div`
  font-family: "InterRegular";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #55555c;
`;

interface IProps {
  list: User[];
}
export const Card: React.FC<IProps> = ({ list }) => {
  const isDateSort = useAppSelector(
    (state) => state.usersReducer.isDateSort
  );
  let year = moment(list[0]?.birthday)?.year();
  moment.locale("ru");
  return (
    <Wrap>
      {list.map((el, ind) => {
        if (
          moment(list[ind + 1]?.birthday)?.year() !== year
        ) {
          year = moment(el.birthday).year();
        }
        return (
          <>
            <ListWrap key={el.id} to={`/users/${el.id}`}>
              <UserImg src={el.avatarUrl} alt="avatar" />
              <CartWrap>
                <div>
                  <TopTextWrap>
                    <Name>
                      {el.firstName} {el.lastName}
                    </Name>
                    <Tag> {el.userTag}</Tag>
                  </TopTextWrap>
                  <Department>
                    {convert(el.department)}
                  </Department>
                </div>
                <DateText>
                  {isDateSort
                    ? moment(el.birthday).format("M")
                    : null}{" "}
                  {isDateSort
                    ? convertMonth(
                        moment(el.birthday).format("MMMM")
                      )
                    : null}
                </DateText>
              </CartWrap>
            </ListWrap>

            {moment(list[ind + 1]?.birthday).year() !==
              year && isDateSort ? (
              <YearWrap>
                <Line />
                <Year>{moment(el.birthday).year()}</Year>
                <Line />
              </YearWrap>
            ) : null}
          </>
        );
      })}
    </Wrap>
  );
};
