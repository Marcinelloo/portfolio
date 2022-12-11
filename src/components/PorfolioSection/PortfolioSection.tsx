import React from "react";
import styled from "styled-components";
import Introduction from "./Introduction";
import SocialLinks from "./SocialLinks";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 100%;
  min-height: calc(100vh - 80px);
  margin: 0 10%;
`;

const HomeSection = () => {
  return (
    <Wrapper>
      <SocialLinks />
      <Introduction />
    </Wrapper>
  );
};

export default HomeSection;
