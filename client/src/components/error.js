import React from "react";
import styled from "styled-components";

import FadeInOut from "animations/fadeInOut";

import { errorTextColor } from "style/palette";

const Error = ({ message }) => (
  <StyledError>
    <FadeInOut visible={!!message}>{message}</FadeInOut>
  </StyledError>
);

const StyledError = styled.div`
  width: 100%;
  text-align:center;
  color: ${errorTextColor};
  font-size: 1.5rem;
  min-height: 1.25em;
  line-height: 1.25;
`;

export default Error;
