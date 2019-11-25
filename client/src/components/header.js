import React from "react";
import styled from "styled-components";

import FadeIn from "animations/fadeIn";

import {
  primaryBackgroundColor,
  primaryTextColor,
} from "style/palette";

const Header = () => (
  <StyledHeader>
    <FadeIn>
      <span id="u">_</span>leetLink
    </FadeIn>
  </StyledHeader>
);

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.2;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  background-color: ${primaryBackgroundColor};
  color: ${primaryTextColor};
  font-family: Montserrat, sans-serif;
  user-select: none;
  white-space: nowrap;

  & #u {
    display: inline-block;
    transform: translateY(-2px);
  }
`;

export default Header;
