import React from "react";
import styled from "styled-components";
import { colors } from "../../common/colors/colors";
const next = require("../../common/images/next.png");

const IntroductionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainInfoWrapper = styled.article`
  max-width: 500px;
`;

const NameWrapper = styled.h1`
  font-size: 28px;
  text-align: left;
  max-width: fit-content;
`;

const JobNameWrapper = styled.h4`
  margin-top: -5px;
  color: ${colors.orange};
  font-style: italic;
`;

const TextWrapper = styled.p`
  max-width: 400px;
  margin-top: 40px;
`;

const ButtonWrapper = styled.div`
  justify-content: left;
  width: 100%;
  display: flex;
  gap: 30px;
  margin-top: 40px;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background: white;
  color: ${colors.blue};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${colors.orange};
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to left, ${colors.orange} 50%, white 50%) right;
    background-size: 220%;
    transition: 0.5s ease-out;
  }
`;

const Circle = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${colors.orange};
  border-radius: 50%;
`;

const Introduction = () => {
  return (
    <IntroductionWrapper>
      <MainInfoWrapper>
        <NameWrapper className="typewriter">
          Hello world, I`m Marcin!
        </NameWrapper>
        <JobNameWrapper>Fullstack Developer</JobNameWrapper>
        <TextWrapper>
          In descriptive writing, the author does not just tell the reader what
          was seen, felt, tested, smelled, or heard. Rather, the author
          describes something from their own experience and, through careful
          choice of words and phrasing, makes it seem real. Descriptive writing
          is vivid, colorful, and detailed.
        </TextWrapper>
        <ButtonWrapper>
          <Button className="scale ">Contact Me</Button>
          <Button className="scale ">CV</Button>
        </ButtonWrapper>
      </MainInfoWrapper>
      <Circle></Circle>
    </IntroductionWrapper>
  );
};

export default Introduction;
