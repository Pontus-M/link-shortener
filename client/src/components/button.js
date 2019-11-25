import React from "react";
import styled from "styled-components";

import LinkIcon from "icons/link";

import {
  primaryBackgroundColor,
  primaryTextColor,
  primaryTextColorAccent,
} from "style/palette";

const Button = () => (
  <StyledButton>
    <LinkIcon />
  </StyledButton>
);

const StyledButton = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  padding: 0.75rem 2rem;
  margin: 1rem;

  color: ${primaryBackgroundColor};
  background-color: ${primaryTextColor};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:hover {
    background-color: ${primaryTextColorAccent};
  }

  & > svg {
    width: 2rem;
    height: 2rem;
    margin: 0 1rem;
  }
`;

export default Button;
