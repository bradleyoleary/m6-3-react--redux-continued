import React from "react";
import styled from "styled-components";
import { COLORS } from "./constants";

const Tags = ({ genres }) => {
  return (
    <Wrapper>
      <Header>tags</Header>
      <Container>
        {genres.map((genre) => {
          return <Genre>{genre}</Genre>;
        })}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  position: absolute;
  top: 478px;
  font-weight: 600;
  font-size: 21px;
`;

const Genre = styled.span`
  background: rgba(75, 75, 75, 0.4);
  border-radius: 5px;
  font-size: 11px;
  font-weight: 600;
  padding: 8px 20px;
  margin: 5px;
  font-size: 11px;
  text-transform: lowercase;
`;

const Container = styled.div`
  position: relative;
  top: 550px;
`;

export default Tags;
