import React from "react";
import styled from "styled-components";
import { colors } from "../../colors/colors";

const NameWrapper = styled.h4`
  align-self: center;
  a {
    color: black;
    text-decoration: none;
  }
`;

const Author: React.FC = () => {
  return (
    <NameWrapper className="hover-underline-animation">
      <a href="#home">Marcin Kulik</a>
    </NameWrapper>
  );
};

export default Author;
