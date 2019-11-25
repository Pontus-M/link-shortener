import React from "react";
import styled from "styled-components";

import { primaryBackgroundColor } from "style/palette";

const LinkIcon = () => (
  <StyledLinkIcon>
    <svg viewBox="0 0 24 24" version="1.0" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
    </svg>
  </StyledLinkIcon>
);
const StyledLinkIcon = styled.svg`
  width: 1rem;
  height: 1rem;
  color: ${primaryBackgroundColor};
`;

export default LinkIcon;
