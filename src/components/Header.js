import React from "react";
import styled from "styled-components";
import { shortVersion } from "../utils";
import { COLORS } from "./constants";

const Header = ({ imgSrc, name, followerTotal }) => {
  return (
    <Wrapper>
      <ArtistImg src={imgSrc} />
      <ArtistName>{name}</ArtistName>
      <NumOfFollowers>
        {shortVersion(followerTotal)}
        <FollowerText>followers</FollowerText>
      </NumOfFollowers>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ArtistImg = styled.img`
  position: absolute;
  width: 175px;
  height: 175px;
  left: 104px;
  top: 59px;
  border-radius: 190.5px;
`;
const ArtistName = styled.h2`
  color: ${COLORS.white};
  position: absolute;
  top: 130px;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75);
`;

const NumOfFollowers = styled.span`
  color: ${COLORS.primary};
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  text-align: center;
  justify-content: center;
  width: 93px;
  height: 17px;
  left: 141px;
  top: 257px;
`;

const FollowerText = styled.span`
  color: ${COLORS.white};
  margin-left: 5px;
`;

export default Header;
