import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../colors/colors";
import { navigationElements } from "../../../data/navigation";
import Author from "./Author";
import Navigation from "./Navigation";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  height: 80px;
`;

const NavigationBar = styled.nav`
  margin: 0 10%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Header = () => {
  return (
    <Wrapper>
      <NavigationBar>
        <Author />
        <Navigation />
      </NavigationBar>
    </Wrapper>
  );
};

export default Header;
