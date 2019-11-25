import React from "react";
import styled from "styled-components";

import {
  white,
  primaryBackgroundColor,
  primaryTextColorAccent
} from "style/palette";

const StyledInput = styled.input`
  font-size: calc(1.8rem + 0.15vw);
  font-size: calc(1rem + 0.5vw);
  width: 40rem;
  max-width: 100%;
  text-align: center;
  background-color: ${white};
  color: ${primaryBackgroundColor};
  border: none;
  padding: 1rem;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 0 0 2px 2px ${primaryTextColorAccent};
  }
`;

const Input = props => <StyledInput {...props} />;

export default Input;
